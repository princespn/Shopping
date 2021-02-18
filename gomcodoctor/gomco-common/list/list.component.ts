import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseService} from '@gomcodoctor/services/base.service';
import {MatSort, MatSortable, Sort} from '@angular/material/sort';

@Component({
  selector: 'gomco-common-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation : ViewEncapsulation.None,

})
export class ListComponent implements OnInit, AfterViewInit {

  @Input() fields = [];
  @Input() filters = [];
  @Input() templates;
  @Input() rowTemplate;
  @Input() resourcePath;
  @Input() batchActions;
  @Input() batchActionsTemplate;
  @Input() routeName;
  @Input() resource;
  @Input() columns;
  @Input() label;
  @Input() showNavigation = true;
  @Input() showHeader = true;
  @Input() subscribeRoute = true;
  @Input() bulk = true;
  @Input() actions = [{type: 'edit'}, {type: 'delete'}];
  @Input() createNewRouteName;

  columnsKeys = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  initialSelection = [];

  allowMultiSelect = true;
  selection: SelectionModel<any>;

  public params: any = { page: 1, perPage: 10};

  products = [];
  total = 0;
  loading = true;

  constructor(
      private baseService: BaseService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private namedRoutesService: NamedRoutesService,
  ) {
    this.selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);
  }

  ngOnInit(): void {
    if (this.subscribeRoute){
      this.activatedRoute.queryParams.subscribe(params => {
        this.params = {...{ page: 1, perPage: 10}, ...JSON.parse(params.query || '{}')};
        this.getList();
      });
    }
    else { this.getList(); }

    if (this.columns){
      this.columnsKeys = [...this.columns];
    }

    if (!this.batchActions && this.bulk) { this.batchActions = [{type: 'delete'}]; }

    if (!this.routeName) { this.routeName = 'admin_' + this.resourcePath + '_list'; }
    if (!this.createNewRouteName) { this.createNewRouteName = 'admin_' + this.resourcePath + '_create'; }
    if (!this.filters) { this.filters = this.fields; }

    if (this.bulk) { this.columnsKeys.unshift({key: 'bulk', label: 'bulk'}); }
    if (this.actions) { this.columnsKeys.push({key: 'actions', label: 'actions'}); }

    this.columnsKeys.forEach((value) => {
      value.visible = true;
    });
    // this.sort.sort(({ id: 'stock', start: 'asc'}) as MatSortable);

  }

  get visibleColumns() {
    return this.columnsKeys.filter(column => (typeof column.visible === 'undefined') || column.visible).map(column => column.key);
  }

  ngAfterViewInit() {
    // this.sort?.sortChange.subscribe(value => {
    //   this.navigate({order: {[value.active]: value.direction}});
    // });

    // this.sort.sort(({ id: 'stock', start: 'asc'}) as MatSortable);
  }

  sortData(sort: Sort) {
    this.navigate({order: {[sort.active]: sort.direction}});
  }

  getList() {
    this.loading = true;
    this.baseService.getList(this.params, this.resource).subscribe((response) => {
      this.products = response.data;
      this.total = response.count;
      this.loading = false;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.products.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() : this.products.forEach(row => this.selection.select(row['@id']));
  }

  nextPage(event){
    this.navigate({page: event});
  }

  nextPageGrid(event){
    this.navigate({page: event.pageIndex + 1, perPage: event.pageSize});
  }

  public navigate(queryParam): void
  {
    this.router.navigate([this.namedRoutesService.getRoute(this.routeName)],
        {queryParams: {query: JSON.stringify({...this.params, ...queryParam},
                (key, value) => {
                  if (!value && value !== false) { return undefined; }
                  return value;
                })}});
  }

  onSubmit = (model) => {
    this.navigate({...model, page: 1});
  }

  bulkPost = (data, key = 'id', resource = null) => {
    const finalData = this.selection.selected.map(id => {
      return {...data, [key]: id};
    });

    this.baseService.postBulk(finalData, resource ?? this.resource).subscribe(
        {
          next: value => {
            this.getList();
            this.selection.clear();
          }
        }
    );
  }

  removeRow(i, row) {
    this.products = this.products.filter((value, index) => index !== i);
    this.selection.deselect(row['@id']);
  }

  updateRow(i, row) {
    this.products[i] = row;
    this.products = [...this.products];
  }

  clearSelectionAndRefresh(){
    this.selection.clear();
    this.getList();
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

}
