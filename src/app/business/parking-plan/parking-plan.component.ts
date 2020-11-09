import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routerAnimation} from '../../animation';

@Component({
  selector: 'app-parking-plan',
  templateUrl: './parking-plan.component.html',
  styleUrls: ['./parking-plan.component.less'],
  animations: [
    routerAnimation
  ]
})

export class ParkingPlanComponent {

  constructor() {
  }

  // 路由切换动画
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
