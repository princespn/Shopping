import {Component} from '@angular/core';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';

@Component({
  selector: 'gomco-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {

  resourcePath = 'smart-parcel-box';
  resource = 'myspbox';
  icEdit = icEdit;
  icMoreVert = icMoreVert;
  queryParams = {id: 'me'};
  registered = true;
}
