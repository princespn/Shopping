import {Component, OnInit} from '@angular/core';
import icPhoneInTalk from '@iconify/icons-ic/twotone-phone-in-talk';
import icMail from '@iconify/icons-ic/twotone-mail';
import icLocationOn from '@iconify/icons-ic/twotone-location-on';
import faFacebook from '@iconify/icons-fa-brands/facebook-f';
import faTwitter from '@iconify/icons-fa-brands/twitter';
import faInstagram from '@iconify/icons-fa-brands/instagram';

@Component({
  selector: 'spb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  icPhoneInTalk = icPhoneInTalk;
  icMail = icMail;
  icLocationOn = icLocationOn;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit() {
  }
}
