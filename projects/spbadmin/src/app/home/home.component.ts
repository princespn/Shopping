import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';

@Component({
  selector: 'gomco-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private namedRoutesService: NamedRoutesService) {
    this.options = fb.group({
      query: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

}
