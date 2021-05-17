import {Component, Input, OnInit} from '@angular/core';
import icArrowBack from '@iconify/icons-ic/twotone-arrow-back';
import {NavigationService} from '@app/admin/services/navigationservice/navigation.service';

@Component({
  selector: 'spb-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  icArrowBack = icArrowBack;
  @Input() label = 'Back';

  constructor(private navigation: NavigationService) {
  }

  onBackPressed(){
    this.navigation.back();
  }
  ngOnInit(): void {
  }

}
