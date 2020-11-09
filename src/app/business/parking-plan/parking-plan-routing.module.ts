import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParkingPlanComponent} from './parking-plan.component';
import {BusinessScopeComponent} from './business-scope/business-scope.component';
import {ProgrammeOverviewComponent} from './programme-overview/programme-overview.component';
import {CooperationCasesComponent} from './cooperation-cases/cooperation-cases.component';
import {CoreProductsComponent} from './core-products/core-products.component';

const routes: Routes = [{
  path: '', component: ParkingPlanComponent,
  children: [
    {path: '', redirectTo: 'business-scope', pathMatch: 'full'},
    {path: 'business-scope', component: BusinessScopeComponent, data: {animation: 'BusinessPage'}},
    {
      path: 'programme-overview',
      component: ProgrammeOverviewComponent,
      // loadChildren: () => import('../parking-plan/programme-overview/programme-overview.module').then(m => m.ProgrammeOverviewModule),
      data: {animation: 'ProgrammePage'}
    },
    {path: 'cooperation-cases', component: CooperationCasesComponent, data: {animation: 'CooperationPage'}},
    {path: 'core-products', component: CoreProductsComponent, data: {animation: 'CoreProductsPage'}}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingPlanRoutingModule {
}
