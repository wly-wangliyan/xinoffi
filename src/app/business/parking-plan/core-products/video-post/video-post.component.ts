import {Component} from '@angular/core';
import {ProductInfo} from '../../../../components/product-detail/productInfo';

@Component({
  selector: 'app-video-post',
  templateUrl: './video-post.component.html',
  styleUrls: ['./video-post.component.less']
})
export class VideoPostComponent {

  public productInfo: ProductInfo = {
    productName: '视频桩',
    productUrl: '../../assets/img/视频桩.png',
    productIntroduction: '视频桩是路内泊位的一对一检测设备，安装在泊位前侧方的人行道边缘，通过定时抓拍的方式获取被检测泊位的照片并将照片上传给云端识别服务器进行图' +
      '像识别，从而实现对泊位的自动检测。视频桩既可以检测车位的空闲状态、也可以识别停放车辆的车牌号码。配合太阳能板电池供电以及4G网络通信，视频桩可以实现自循环，达到' +
      '无电、无网、无光、无现场维护的使用状态。视频桩施工简单、安装方便，不会对市容市貌造成影响。',
    functionalCharacteristic: ['【全适应】适应于全部路内停车场景，安装不受道路及周围树木的影响。',
      '【易安装】安装不需要清空泊位，对环境破坏小，对市容市貌影响非常小。',
      '【低成本】采用4G无线通信技术，供电采用太阳能方案，设备安装免布线，大幅的降低了建设成本。',
      '【免维护】弱光太阳能发电方案具备更强城市环境适应性，对抗楼宇树木遮挡的能力更强，可轻松实现设备供电全年免维护。'],
    attribute: [
      {propertyName: '供电方式:', propertyValue: '太阳能板/电池'},
      {propertyName: '像素:', propertyValue: '200w'},
      {propertyName: '焦距类型:', propertyValue: '定焦'},
      {propertyName: '安装高度:', propertyValue: '0.6米'},
      {propertyName: '通讯方式:', propertyValue: '4G'},
      {propertyName: '管理泊位数量:', propertyValue: '1个'},
      {propertyName: '识别率:', propertyValue: '> 99%'},
      {propertyName: '识别距离:', propertyValue: '< 10米'},
      {propertyName: '识别内容:', propertyValue: '前车牌号、车型等'},
      {propertyName: '识别方式:', propertyValue: '本地抓拍，云端识别'},
    ]
  };

  constructor() {
  }

}


