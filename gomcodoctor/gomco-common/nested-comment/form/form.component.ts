import {Component, Input, OnInit} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {AuthService} from '@gomcodoctor/services/auth/auth.service';

@Component({
  selector: 'gomco-nested-comment-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() comment: any;
  @Input() comments: any;
  @Input() article: any;

  fields: FormlyFieldConfig[] = [
    {
      key: 'comment',
      type: 'textarea',
      // focus: true,
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

  user: any;
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.comment) {
      this.model.parent = this.comment['@id'];
    }

    if (this.article) {
      this.model.article = this.article['@id'];
    }

    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  successCallback = (comment) => {
    if (this.comment){
      this.comment.enabledChildren.push(comment);
    }

    if (this.comments){
      this.comments.unshift(comment);
    }

  }

}
