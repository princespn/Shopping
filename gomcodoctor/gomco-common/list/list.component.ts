import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseService} from '@gomcodoctor/services/base.service';
import {MatSort, Sort} from '@angular/material/sort';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {MetaService} from '@ngx-meta/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import {isEmpty} from 'lodash';

@Component({
  selector: 'gomco-common-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation : ViewEncapsulation.None,

})
export class ListComponent implements OnInit, AfterViewInit {
  icSearch = icSearch;
  @Input() fields = [];
  @Input() filters = [];
  @Input() templates;
  @Input() rowTemplate;
  @Input() noDataTemplate;
  @Input() noSearchResultTemplate;
  @Input() resourcePath;
  @Input() batchActions;
  @Input() batchActionsTemplate;
  @Input() routeName;
  @Input() resource;
  @Input() columns;
  @Input() label;
  @Input() showNavigation = true;
  @Input() showHeader = true;
  @Input() showHeading = false;
  @Input() subscribeRoute = true;
  @Input() bulk = true;
  @Input() defaultFilterParam = {};
  @Input() actions: any = [{type: 'edit'}, {type: 'delete'}];
  @Input() createNewRouteName;
  @Input() createButtonName: string;
  @Input() createNewDialogTemplate: any;
  @Input() createButton = false;
  @Input() dataList;
  @Input() metaTitle;
  @Input() setMetaTitle = true;
  @Input() isItemCheckBoxDisabled;
  @Input() listClass = '';
  columnsKeys = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // For multiple selection
  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<any>;
  // For multiple selection

  // public params: any = { page: 1, perPage: 10};
  public params: any = {};
  products = [];
  total = 0;
  loading = true;
  searchItem = false;
  inlineNavigationSubscriber = new BehaviorSubject({});

  constructor(
    private baseService: BaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private namedRoutesService: NamedRoutesService,
    protected readonly meta: MetaService
  ) {
    this.selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);
    // this.selection.changed.subscribe((value) => console.log(value));
  }

  ngOnInit(): void {
    if (this.subscribeRoute){
      this.activatedRoute.queryParams.subscribe(params => {
        this.handleNewParams(params);
      });
    }
    else if (!this.dataList) {
      this.inlineNavigationSubscriber.subscribe(params => {
        this.handleNewParams(params);
      });
    }

    if (this.dataList) {
      this.products = this.dataList;
      this.loading = false;
    }

    if (this.columns){
      this.columnsKeys = [...this.columns];
    }

    if (!this.batchActions && this.bulk && !this.batchActionsTemplate) { this.batchActions = [{type: 'delete'}]; }

    if (!this.routeName) { this.routeName = 'admin_' + this.resourcePath + '_list'; }
    if (!this.createNewRouteName && this.createButton) { this.createNewRouteName = 'admin_' + this.resourcePath + '_create'; }
    if (this.filters.length === 0) { this.filters = this.fields; }

    if (this.bulk) { this.columnsKeys.unshift({key: 'bulk', label: 'bulk'}); }
    if (this.actions.length > 0) { this.columnsKeys.push({key: 'actions', label: 'Actions'}); }

    this.columnsKeys.forEach((value) => {
      value.visible = true;
    });
    // this.sort.sort(({ id: 'stock', start: 'asc'}) as MatSortable);

    if (!this.metaTitle) { this.metaTitle = this.resource; }
    if (this.setMetaTitle && this.metaTitle) { this.meta.setTitle(`${this.metaTitle}`); }

  }

  private handleNewParams(params) {
    this.searchItem = !isEmpty(params);
    this.params = {...{ page: 1, perPage: 10}, ...JSON.parse(params.query || '{}')};
    this.getList();
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
    this.products = [];

    this.baseService.getList({...this.defaultFilterParam, ...this.params}, this.resource).subscribe((response) => {
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
      this.selection.clear() : this.products.forEach(row => {
        if (!this.isItemCheckBoxDisabled || !this.isItemCheckBoxDisabled(row)) { this.selection.select(row['@id']); }
      });
  }

  nextPage(event){
    this.navigate({page: event});
  }

  nextPageGrid(event){
    this.navigate({page: event.pageIndex + 1, perPage: event.pageSize});
  }

  public navigate(queryParam): void
  {
    this.emitNewParams({
      query: JSON.stringify({...this.params, ...queryParam},
        (key, value) => {
          if (!value && value !== false) {
            return undefined;
          }
          return value;
        })
    });
  }

  private emitNewParams(params){
    if (this.subscribeRoute) {
      this.router.navigate([this.namedRoutesService.getRoute(this.routeName)],
        {
          queryParams: params
        });
    }
    else {
      this.inlineNavigationSubscriber.next(params);
    }
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

  addRow = (row) => {
    this.products.unshift(row);
    this.products = [...this.products];
  }

  onDelete = (i, row) => {
    this.removeRow(i, row);
  }

  updateRow(i, row) {
    this.products[i] = row;
    this.products = [...this.products];
  }

  updateRowConst = (i, row) => this.updateRow(i, row);

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
