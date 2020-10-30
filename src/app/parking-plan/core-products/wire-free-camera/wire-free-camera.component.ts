import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wire-free-camera',
  templateUrl: './wire-free-camera.component.html',
  styleUrls: ['./wire-free-camera.component.less']
})
export class WireFreeCameraComponent implements OnInit {

  public detailData: Product = new Product('免布线相机',
    '../../../assets/img/免.png',
    '免布线中位相机是路内泊位的一对多检测设备，' +
    '安装在3米高的位置处，通过定时抓拍的方式获取被检测泊位的照片并将照片上传给云端识别服务器进行图像识别，从而实现对泊位的自动检测。' +
    '免布线中位相机既可以检测车位的空闲状态、也可以识别停放车辆的车牌号码。配合太阳能板电池供电以及4G网络通信，免布线中位相机可以实现' +
    '自循环，达到无电、无网、无现场维护的使用状态。免布线中位相机可借杆安装，能够降低施工成本、提高建设效率。',
    ['采用免布线设计理念，极大减少强弱电施工及维护成本。',
      '支持借杆（路灯杆、监控杆等）安装方式，部署更为灵活，有效提高市政立杆利用率。',
      '采用3米安装高度，环境遮挡率低，施工及维护便捷。',
      '云端图像识别，多级深度学习算法，具备高速度、高指标、扩展性强等特点。'],
    '太阳能板/电池',
    500,
    '变焦',
    '低照度、宽动态',
    4,
    3,
    99,
    30,
    '车牌号码、车型等',
    '本地抓拍，云端识别');

  constructor() { }

  ngOnInit(): void {
  }

}

export class Product {
  constructor(
    public productName: string, // 产品名称
    public productUrl: string, // 图片路径
    public productIntroduction: string, // 产品介绍
    public functionalCharacteristic ?: string[], // 功能特性
    public powerSupplyMode ?: string, // 供电方式
    public pixel ?: number, // 像素
    public focusType ?: string, // 聚焦类型
    public otherFeatures ?: string, // 其它特性
    public communicationMode ?: number, // 通讯方式
    public installationHeight ?: number, // 安装高度
    public recognitionRate ?: number, // 识别率
    public recognitionDistance ?: number, // 识别距离
    public recognitionContent ?: string, // 识别内容
    public recognitionStyle ?: string, // 识别方式
  ) {}
}
