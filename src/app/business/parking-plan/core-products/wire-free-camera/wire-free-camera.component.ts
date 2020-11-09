import {Component} from '@angular/core';
import {ProductInfo} from '../../../../components/product-detail/productInfo';

@Component({
  selector: 'app-wire-free-camera',
  templateUrl: './wire-free-camera.component.html',
  styleUrls: ['./wire-free-camera.component.less']
})
export class WireFreeCameraComponent {

  public productInfo: ProductInfo = {
    productName: '免布线相机',
    productUrl: '../../assets/img/设备.png',
    productIntroduction: '免布线中位相机是路内泊位的一对多检测设备，安装在3米高的位置处，通过定时抓拍的方式获取被检测泊位的照片并将照片上传给云端识别服务器' +
      '进行图像识别，从而实现对泊位的自动检测。免布线中位相机既可以检测车位的空闲状态、也可以识别停放车辆的车牌号码。配合太阳能板电池供电以及4G网络通信，免布线中位' +
      '相机可以实现自循环，达到无电、无网、无现场维护的使用状态。免布线中位相机可借杆安装，能够降低施工成本、提高建设效率。',
    functionalCharacteristic: ['采用免布线设计理念，极大减少强弱电施工及维护成本。',
      '支持借杆（路灯杆、监控杆等）安装方式，部署更为灵活，有效提高市政立杆利用率。',
      '采用3米安装高度，环境遮挡率低，施工及维护便捷。',
      '云端图像识别，多级深度学习算法，具备高速度、高指标、扩展性强等特点。'],
    attribute: [
      {propertyName: '供电方式:', propertyValue: '太阳能板/电池'},
      {propertyName: '像素:', propertyValue: '500w'},
      {propertyName: '焦距类型:', propertyValue: '变焦'},
      {propertyName: '其它特性:', propertyValue: '低照度、宽动态'},
      {propertyName: '通讯方式:', propertyValue: '4G'},
      {propertyName: '安装高度:', propertyValue: '3米'},
      {propertyName: '识别率:', propertyValue: '> 99%'},
      {propertyName: '识别距离:', propertyValue: '< 30米'},
      {propertyName: '识别内容:', propertyValue: '车牌号码、车型等'},
      {propertyName: '识别方式:', propertyValue: '本地抓拍，云端识别'},
    ]
  };
}
