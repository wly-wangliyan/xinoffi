export class ProductInfo {
  public productName: string; // 产品名称
  public productUrl: string; // 图片路径
  public productIntroduction: string; // 产品介绍
  public functionalCharacteristic: Array<string>; // 功能特性
  public attribute: Array<ProductProperty>; // 技术参数
}

export class ProductProperty {
  public propertyName: string; // 属性名
  public propertyValue: string; // 属性值
}
