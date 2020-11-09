import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-programme-overview',
  templateUrl: './programme-overview.component.html',
  styleUrls: ['./programme-overview.component.less']
})
export class ProgrammeOverviewComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  public routerToRoadsideSystem() {
    this.router.navigate(['/parking-plan/programme-overview/roadside-parking-system'], {relativeTo: this.route});
    this.scrollToTop();
  }

  public routerToOutRoadsideSystem() {
    this.router.navigate(['/parking-plan/programme-overview/out-roadside-parking-system'], {relativeTo: this.route});
    this.scrollToTop();
  }

  public routerToTrafficGuidanceSystem() {
    this.router.navigate(['/parking-plan/programme-overview/traffic-guidance-system'], {relativeTo: this.route});
    this.scrollToTop();
  }

  public routerToInFieldSystem() {
    this.router.navigate(['/parking-plan/programme-overview/in-field-guidance-system'], {relativeTo: this.route});
    this.scrollToTop();
  }

  private scrollToTop() {
    document.documentElement.scrollTop = 0;
  }

}
