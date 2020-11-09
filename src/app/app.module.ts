import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './business/home/home.component';
// import {NavComponent} from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FooterComponent} from './components/footer/footer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatOptionModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {ParkingPlanComponent} from './business/parking-plan/parking-plan.component';
import {ServiceAdvantagesComponent} from './business/service-advantages/service-advantages.component';
import {AboutUsComponent} from './business/about-us/about-us.component';
import {BusinessScopeComponent} from './business/parking-plan/business-scope/business-scope.component';
import {ProgrammeOverviewComponent} from './business/parking-plan/programme-overview/programme-overview.component';
import {CooperationCasesComponent} from './business/parking-plan/cooperation-cases/cooperation-cases.component';
import {CoreProductsComponent} from './business/parking-plan/core-products/core-products.component';
import {WireFreeCameraComponent} from './business/parking-plan/core-products/wire-free-camera/wire-free-camera.component';
import {VideoPostComponent} from './business/parking-plan/core-products/video-post/video-post.component';
import {RoadsideCameraComponent} from './business/parking-plan/core-products/roadside-camera/roadside-camera.component';
import {BasicInfoComponent} from './business/about-us/basic-info/basic-info.component';
import {DevelopmentHistoryComponent} from './business/about-us/development-history/development-history.component';
import {EnterpriseQualificationComponent} from './business/about-us/enterprise-qualification/enterprise-qualification.component';
import {ContactUsComponent} from './business/about-us/contact-us/contact-us.component';
import {RoadsideParkingSystemComponent} from './business/parking-plan/programme-overview/roadside-parking-system/roadside-parking-system.component';
import {OutRoadsideParkingSystemComponent} from './business/parking-plan/programme-overview/out-roadside-parking-system/out-roadside-parking-system.component';
import {TrafficGuidanceSystemComponent} from './business/parking-plan/programme-overview/traffic-guidance-system/traffic-guidance-system.component';
import {InFieldGuidanceSystemComponent} from './business/parking-plan/programme-overview/in-field-guidance-system/in-field-guidance-system.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ParkingPlanModule} from './business/parking-plan/parking-plan.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // NavComponent,
    FooterComponent,
    ParkingPlanComponent,
    ServiceAdvantagesComponent,
    AboutUsComponent,
    BusinessScopeComponent,
    ProgrammeOverviewComponent,
    CooperationCasesComponent,
    CoreProductsComponent,
    WireFreeCameraComponent,
    VideoPostComponent,
    RoadsideCameraComponent,
    BasicInfoComponent,
    DevelopmentHistoryComponent,
    EnterpriseQualificationComponent,
    ContactUsComponent,
    RoadsideParkingSystemComponent,
    OutRoadsideParkingSystemComponent,
    TrafficGuidanceSystemComponent,
    InFieldGuidanceSystemComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatMenuModule,
    ParkingPlanModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
