import {Component, OnInit} from '@angular/core';
import icMail from '@iconify/icons-ic/twotone-mail';
import icLocationOn from '@iconify/icons-ic/twotone-location-on';
import faFacebook from '@iconify/icons-fa-brands/facebook-f';
import faTwitter from '@iconify/icons-fa-brands/twitter';
import faInstagram from '@iconify/icons-fa-brands/instagram';

@Component({
  selector: 'spb-guest-footer',
  templateUrl: './guest-footer.component.html',
  styleUrls: ['./guest-footer.component.scss']
})
export class GuestFooterComponent implements OnInit {
  icMail = icMail;
  icLocationOn = icLocationOn;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit() {
  }
}
