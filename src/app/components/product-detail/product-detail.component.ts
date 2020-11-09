import {Component, Input, OnInit} from '@angular/core';
import {ProductInfo} from './productInfo';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  @Input() public productInfo: ProductInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}


