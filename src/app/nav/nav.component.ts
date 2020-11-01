import {Component, DoCheck, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';
import {fromEvent, Subscription} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  public subscribeScoll: any;

  public rooterChange: Subscription;
  showTopTwo = false;
  @ViewChild('targetDiv') public  targetDiv: ElementRef;
  @ViewChild('LogoImg') public LogoImg: ElementRef;
  @ViewChild('parkingPlanMenu') public parkingPlanMenu: ElementRef;
  @ViewChild('topMenu') public topMenu: ElementRef;
  @ViewChild('hiddenBack') public hiddenBack: ElementRef;

  constructor(private el: ElementRef, private render: Renderer2, private  router: Router) {
  }


  ngOnInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof ActivationEnd) {// 当导航成功结束时执行
        document.documentElement.scrollTop = 0;
        this.unDisplayMenuList();
      }
    });
    // console.log(this.el.nativeElement);
    this.subscribeScoll = fromEvent(window, 'scroll')
        .subscribe((event) => {
          this.onWindowScroll();
        });
  }

  public onWindowScroll() {
    const t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t === 0) {
        const items: any = document.getElementsByClassName('page-button');
        this.targetDiv.nativeElement.style.backgroundColor = 'transparent';
        this.LogoImg.nativeElement.style.background = 'url("../../assets/img/logo1.png")';
        console.log(items[0].style);
        for ( let i = 0 ; i < items.length ; i++) {
          items[i].style.color = 'white';
        }

      } else {
        // const items: any = document.getElementsByClassName('page-button');
        // this.targetDiv.nativeElement.style.backgroundColor = 'white';
        // this.LogoImg.nativeElement.style.background = 'url("../../assets/img/logo3.png")';
        // for (let i = 0; i < items.length ; i++) {
        //   items[i].style.color = '#302E3E';
        // }
        this.changeTopDisplay();
      }
  }

  public displayMenuList() {
    console.log('777');
    this.parkingPlanMenu.nativeElement.style.display = 'block';
    this.targetDiv.nativeElement.style.backgroundColor = 'white';
    // this.targetDiv.nativeElement.style.backgroundSize = '50px 30px';
    // this.targetDiv.nativeElement.style.height = '280px';
    this.topMenu.nativeElement.style.height = '255px';
    this.parkingPlanMenu.nativeElement.style.display = 'flex';
    this.hiddenBack.nativeElement.style.display = 'block';
    this.changeTopDisplay();
  }

  public unDisplayMenuList() {
    console.log('777');
    this.hiddenBack.nativeElement.style.display = 'none';
    this.parkingPlanMenu.nativeElement.style.display = 'none';
    this.topMenu.nativeElement.style.height = '55px';
    this.onWindowScroll();
  }

  private changeTopDisplay(){
    const items: any = document.getElementsByClassName('page-button');
    this.targetDiv.nativeElement.style.backgroundColor = 'white';
    this.LogoImg.nativeElement.style.background = 'url("../../assets/img/logo3.png")';
    for (let i = 0; i < items.length ; i++) {
      items[i].style.color = '#302E3E';
    }
  }
}
