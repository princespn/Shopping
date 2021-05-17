import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {Fields} from "@app/admin/container/edit/fields";

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  galleryOptions: NgxGalleryOptions[] = [
    {
      image: true, height: '300px', thumbnails: true,
      previewCloseOnClick: true,
      previewCloseOnEsc: true, previewInfinityMove: true, previewZoom: true, previewBullets: true, previewRotate: true
    },
    {breakpoint: 800, width: '100%'}
  ];

  resourcePath = 'container';
  resource = 'containers';
  itemResourcePath = 'container-items';
  itemResource = 'supplier_order_item_receipts';
  editFields = Fields();
  filterFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'number',
          type: 'input',
          templateOptions: {
            placeholder: 'Container Number',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'createdAt.after',
          type: 'datepicker',
          templateOptions: {
            label: 'From Date (Arrival)',
            placeholder: 'From Date',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'createdAt.before',
          type: 'datepicker',
          templateOptions: {
            label: 'To Date (Arrival)',
            placeholder: 'To date',
            required: false,
          },
        },
      ]
    }
  ];
  columns = [
    {
      key: 'number',
      label: 'Container Number',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'images',
      label: 'Images'
    },
    {
      key: 'createdAt',
      label: 'Arrival Date',
      type: 'datetime'
    }
    // {
    //   key: 'updatedAt',
    //   label: 'Last Scan Activity Date',
    //   type: 'datetime'
    // }
  ];
  actions = [
    {type: 'edit'},
    {type: 'delete'},
  ];
  itemColumns = [
    {
      key: 'barcode',
      label: 'Barcode',
    },
    {
      key: 'quantity',
      label: 'Quantity',
    },
    {
      key: 'numberOfBox',
      label: 'Number Of Box',
    },
    {
      key: 'syncToErp',
      label: 'Sync To Erp',
      type: 'boolean'
    }
  ];
}
