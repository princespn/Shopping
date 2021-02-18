import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-comment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  comments = [];

  @Input() resource: any;
  @Input() subject: any;

  showForm = false;

  constructor(protected apiService: BaseService) { }

  ngOnInit(): void {
    this.fetchComments();
  }

  private fetchComments(){
    this.apiService.getList({perPage: 10, reviewSubject: this.subject['@id']}, this.resource).subscribe(data => {
      this.comments = data.data;
    });
  }

  nextPage(event){
    console.log(event);
    // const newPage = this.params.page ? (this.params.page + 1) : 1;
    // this.navigate({page: event});
  }

}
