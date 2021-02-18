import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {AuthService} from '@gomcodoctor/services/auth';

@Component({
  selector: 'gomco-comment-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  @Input() reviewSubject;
  @Input() resource;
  @Input() comments;

  private user = null;

  fields: FormlyFieldConfig[] = [
    {
      key: 'rating',
      type: 'rating',
      templateOptions: {
        // label: 'query',
        label: 'Rating',
        placeholder: 'Rating',
        required: true,
        appearance: 'outline'
      },
    },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   key: 'author',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1',
    //       key: 'firstName',
    //       type: 'input',
    //       templateOptions: {
    //         // label: 'query',
    //         label: 'First Name',
    //         placeholder: 'First Name',
    //         required: true,
    //         appearance: 'outline'
    //       },
    //     },
    //     {
    //       className: 'flex-1',
    //       key: 'lastName',
    //       type: 'input',
    //       templateOptions: {
    //         // label: 'query',
    //         label: 'Last Name',
    //         placeholder: 'Last Name',
    //         required: true,
    //         appearance: 'outline'
    //       },
    //     }
    //   ],
    //   hideExpression: !!this.user
    // },
    // {
    //   key: 'email',
    //   type: 'input',
    //   templateOptions: {
    //     // label: 'query',
    //     label: 'Email',
    //     placeholder: 'Email',
    //     required: true,
    //     appearance: 'outline'
    //   },
    // },
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        // label: 'query',
        label: 'Subject',
        placeholder: 'Subject',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'comment',
      type: 'textarea',
      templateOptions: {
        // label: 'query',
        label: 'Comment',
        placeholder: 'Comment',
        required: true,
        appearance: 'outline',
        autosize: true,
        autosizeMinRows: 3,
        autosizeMaxRows: 10,
      },
    }
  ];

  model: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.model = {reviewSubject: this.reviewSubject['@id']};
    // this.authService.user.subscribe(value => {
    //   this.user = value;
    //   this.fields[1].hideExpression = !!value;
    //   this.fields[2].hideExpression = !!value;
    // });
  }

  successCallback = (comment) => {
    if (this.comments){
      this.comments.unshift(comment);
    }
  }

}
