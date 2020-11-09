import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cooperation-cases',
  templateUrl: './cooperation-cases.component.html',
  styleUrls: ['./cooperation-cases.component.less']
})
export class CooperationCasesComponent implements OnInit, AfterViewInit {

  public array: Array<Array<Product>>;
  public index = 0; // 状态控制显示在当前页面的模块（城市案例/停车场案例）;
  private status = 0; // 状态控制显示在当前页面的图片组

  @ViewChild('parkingImg') public parkingImg: ElementRef;
  @ViewChild('parkingGroup') public parkingGroup: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.array = [[
      new Product('../../../assets/img/01沈阳国际软件园.jpg', '沈阳国际软件园'),
      new Product('../../assets/img/02东北国际医院.jpg', '东北国际医院'),
      new Product('../../assets/img/03李铁8号足球公园.jpg', '李铁8号足球公园'),
      new Product('../../assets/img/04沈阳大学.jpg', '沈阳大学'),
      new Product('../../assets/img/05沈阳科学宫.jpg', '沈阳科学宫'),
      new Product('../../assets/img/06友谊宾馆.jpg', '友谊宾馆'),
    ]
      , [
        new Product('../../assets/img/07新荣大厦.jpg', '新荣大厦'),
        new Product('../../assets/img/08辽宁电力中心医院.jpg', '辽宁电力中心医院'),
        new Product('../../assets/img/09南风俱乐部.jpg', '南风俱乐部'),
        new Product('../../assets/img/10水上渔港.jpg', '水上渔港'),
        new Product('../../assets/img/11东北大厦.jpg', '东北大厦'),
        new Product('../../assets/img/12沈阳市南湖公园.jpg', '沈阳市南湖公园'),
      ], [
        new Product('../../assets/img/13同方大厦.jpg', '同方大厦'),
        new Product('../../assets/img/14沈阳北站南广场.jpg', '沈阳北站南广场'),
        new Product('../../assets/img/15沈阳市胸科医院.jpg', '沈阳市胸科医院'),
        new Product('../../assets/img/16塞隆眼镜城.jpg', '塞隆眼镜城'),
        new Product('../../assets/img/17沈阳市儿童医院.jpg', '沈阳市儿童医院'),
        new Product('../../assets/img/18天姿大厦.jpg', '天姿大厦'),
      ]
    ];
  }

  ngAfterViewInit() {
    this.loopParks();
  }

  // 点击切换案例
  public onClickChooseCase(e) {
    if (e.target.innerHTML === '城市案例') {
      this.index = 0;
    } else {
      this.index = 1;
    }
  }

  // 点击下一页正向循环展示停车场组
  public positiveLoopPark() {
    this.status = this.status < 2 ? this.status + 1 : 0;
    this.loopParks();
  }

  // 点击上一页逆向循环展示停车场组
  public backLoopPark() {
    this.status = this.status > 0 ? this.status - 1 : 2;
    this.loopParks();
  }

  // 循环停车场组
  private loopParks() {
    const items: any = document.getElementsByClassName('parking-group');
    for (let i = 0; i < items.length; i++) {
      if (i === this.status) {
        items[i].style.display = 'flex';
      } else {
        items[i].style.display = 'none';
      }
    }
  }
}

export class Product {
  constructor(
    public img: string,
    public title: string,
  ) {
  }
}
