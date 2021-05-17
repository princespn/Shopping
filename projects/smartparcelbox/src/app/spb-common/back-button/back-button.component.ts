import {Component, Input, OnInit} from '@angular/core';
import icArrowBack from '@iconify/icons-ic/twotone-arrow-back';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSend from '@iconify/icons-ic/twotone-send';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icMenu from '@iconify/icons-ic/twotone-menu';
import {NavigationService} from '@gomcodoctor/services/navigationservice/navigation.service';

@Component({
  selector: 'spb-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  icAccountCircle = icAccountCircle;
  icCheckCircle = icCheckCircle;
  icMoreVert = icMoreVert;
  icSend = icSend;
  icMenu = icMenu;
  icArrowBack = icArrowBack;
  @Input() moreDetailTemplate: any;
  @Input() label = 'Back';
  @Input() order: any;

  constructor(private navigation: NavigationService) {
  }

  onBackPressed(){
    this.navigation.back();
  }
  ngOnInit(): void {}

}
