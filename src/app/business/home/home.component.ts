import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {

  public index = 0; // 产品切换标志
  public

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public onClickChooseProduct(e) {
    if (e.target.innerHTML === '免布线相机') {
      this.index = 0;
    } else if (e.target.innerHTML === '路牙相机') {
      this.index = 1;
    } else {
      this.index = 2;
    }
  }

  public routerToProgrammeOverview() {
    this.router.navigate(['/parking-plan/programme-overview'], {relativeTo: this.route});
    this.onClickScrollToTop();
  }

  // 路由跳转后滚动条回到最上面
  public onClickScrollToTop() {
    document.documentElement.scrollTop = 0;
  }

  ngOnDestroy() {
  }
}



