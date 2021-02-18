import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {AuthService} from '@gomcodoctor/services/auth/auth.service';
import {FormComponent} from '@gomcodoctor/gomco-common/nested-comment/form/form.component';

@Component({
  selector: 'gomco-nested-comment',
  templateUrl: './nested-comment.component.html',
  styleUrls: ['./nested-comment.component.scss']
})
export class NestedCommentComponent implements OnInit {

  @Input() comment: any;

  @ViewChild('commentForm') commentForm: FormComponent;

  @ViewChild('commentForm', {read: ElementRef})
  commentFormElement: ElementRef;

  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'comment',
      type: 'textarea',
      focus: true,
      templateOptions: {
        // label: 'query',
        label: 'Comment',
        placeholder: 'Write a comment',
        required: true,
        appearance: 'outline',
        autosize: true,
        autosizeMinRows: 1,
        autosizeMaxRows: 10,
        // addonRight: {
        //   icon: 'send',
        //   onClick: () => this.commentForm?.submit()
        // }
      },
      modelOptions: {
        updateOn: 'submit',
      },
    }
  ];

  showCommentForm = false;
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.model.parent = this.comment['@id'];
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  reply(){
    this.showCommentForm = true;
    // this.fields[0].focus = true;
    setTimeout(() => this.commentFormElement?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'nearest'}));
  }

  successCallback = (comment) => {
    this.comment.enabledChildren.push(comment);
  }

}
