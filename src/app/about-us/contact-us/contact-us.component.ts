import {Component, OnInit} from '@angular/core';

declare var AMap: any;
let map: any = 'undefined';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
    this.getMap();
    this.getLocation();
    // 创建一个 Marker 实例：
    const marker = new AMap.Marker({
      position: new AMap.LngLat(116.312911, 40.037304),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '北京'
    });

// 将创建的点标记添加到已有的地图实例：
    map.add(marker);
  }

  private getMap(): void {
    map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 30,
      center: [116.312911, 40.037304]
    });
  }


  private getLocation(): void {
    map.on('click', (e: any): void => {
      console.log(e.lnglat.getLng());
      console.log(e.lnglat.getLat());
    });
  }

}
