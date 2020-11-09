import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routerAnimation} from '../../animation';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  animations: [
    routerAnimation
  ]
})
export class AboutUsComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
