// import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {ActivatedRoute, Router} from '@angular/router';
// import {fromEvent, Subscription} from 'rxjs';
//
// @Component({
//   selector: 'app-nav',
//   templateUrl: './nav.component.html',
//   styleUrls: ['./nav.component.less']
// })
// export class NavComponent implements OnInit, AfterViewInit {
//
//   public subscribeScroll: any;
//   public rooterChange: Subscription;
//   private isMoveOn = false; // 是否鼠标悬浮在滚动条上
//   private scrollTop = 0; // 距离顶部的高度
//
//   @ViewChild('targetDiv') public targetDiv: ElementRef;
//   @ViewChild('LogoImg') public LogoImg: ElementRef;
//   @ViewChild('parkingPlanMenu') public parkingPlanMenu: ElementRef;
//   @ViewChild('topMenu') public topMenu: ElementRef;
//   @ViewChild('hiddenBack') public hiddenBack: ElementRef;
//   @ViewChild('aboutUsMenu') public aboutUsMenu: ElementRef;
//
//   constructor(private router: Router, private route: ActivatedRoute) {
//   }
//
//   ngOnInit() {
//   }
//
//   ngAfterViewInit() {
//     this.subscribeScroll = fromEvent(window, 'scroll')
//       .subscribe((event) => {
//         // console.log((event.target as any).scrollingElement.scrollLeft);
//         const navLeft = (event.target as any).scrollingElement.scrollLeft;
//         this.targetDiv.nativeElement.style.left = `-${navLeft}px`;
//         this.onWindowScroll();
//       });
//   }
//
//   // 获取滚动条竖向位移
//   public onWindowScroll() {
//     this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     this.updateNavBarState();
//   }
//
//   public onMoveInNavBar() {
//     this.isMoveOn = true;
//     this.updateNavBarState();
//   }
//
//   public onMoveOutNavBar() {
//     this.isMoveOn = false;
//     this.updateNavBarState();
//   }
//
//   // 鼠标移到导航栏显示对应子菜单
//   public displayMenuList(e) {
//     this.topMenu.nativeElement.style.height = '280px';
//     this.hiddenBack.nativeElement.style.height = '200px';
//     this.hiddenBack.nativeElement.style.opacity = '0.9';
//     setTimeout(() => e.childNodes[1].style.transform = 'translate(0px, 40px)', 20);
//     e.childNodes[1].style.display = 'flex';
//     e.childNodes[1].style.height = '141px';
//   }
//
//   // 鼠标离开菜单时收回子菜单
//   public unDisplayMenuList(e) {
//     this.isMoveOn = false;
//     this.hiddenBack.nativeElement.style.height = '1px';
//     this.hiddenBack.nativeElement.style.opacity = '0';
//     setTimeout(() => e.childNodes[1].style.display = 'none', 20);
//     this.topMenu.nativeElement.style.height = '80px';
//     e.childNodes[1].style.transform = 'translate(0px, 0px)';
//   }
//
//   // 路由跳转后滚动条回到最上面
//   public onClickScrollToTop() {
//     document.documentElement.scrollTop = 0;
//   }
//
//   public routerToHomePage() {
//     this.router.navigate(['/home'], {relativeTo: this.route});
//     this.onClickScrollToTop();
//   }
//
//   // 更新导航栏状态
//   private updateNavBarState() {
//     const items: any = document.getElementsByClassName('page-button');
//     if (this.scrollTop === 0 && !this.isMoveOn) {
//       // 透明色
//       this.targetDiv.nativeElement.style.backgroundColor = 'transparent';
//       this.LogoImg.nativeElement.style.background = 'url("../../assets/img/logo1.png")';
//       // console.log(items[0].style);
//       for (let i = 0; i < items.length; i++) {
//         items[i].style.color = 'white';
//       }
//     } else {
//       // 白色
//       this.targetDiv.nativeElement.style.backgroundColor = 'white';
//       this.LogoImg.nativeElement.style.background = 'url("../../assets/img/logo3.png")';
//       for (let i = 0; i < items.length; i++) {
//         items[i].style.color = '#302E3E';
//       }
//     }
//   }
// }
