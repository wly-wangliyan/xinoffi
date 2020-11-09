import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {DevelopmentHistoryComponent} from './development-history/development-history.component';
import {EnterpriseQualificationComponent} from './enterprise-qualification/enterprise-qualification.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [{
  path: '', component: AboutUsComponent,
  children: [
    {path: '', redirectTo: 'basic-info', pathMatch: 'full'},
    {path: 'basic-info', component: BasicInfoComponent, data: {animation: 'BasicInfoPage'}},
    {path: 'development-history', component: DevelopmentHistoryComponent, data: {animation: 'DevelopPage'}},
    {path: 'enterprise-qualification', component: EnterpriseQualificationComponent, data: {animation: 'EnterprisePage'}},
    {path: 'contact-us', component: ContactUsComponent, data: {animation: 'ContactPage'}}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
