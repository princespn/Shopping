import {Component} from '@angular/core';
import {Fields} from './fields';
import {NavigationService} from '@gomcodoctor/services/navigationservice/navigation.service';

@Component({
  selector: 'homescapes-orders-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  resourcePath = 'orders';
  resource = 'orders';

  fields = Fields();
  fetchData = false;
  constructor(public ngservice: NavigationService) {}

  onDeletion(){
    this.ngservice.back();
  }
}
