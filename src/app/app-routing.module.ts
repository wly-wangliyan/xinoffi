import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './business/home/home.component';
import {ServiceAdvantagesComponent} from './business/service-advantages/service-advantages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'parking-plan',
    loadChildren: () => import('./business/parking-plan/parking-plan.module').then(m => m.ParkingPlanModule),
  },
  {
    path: 'service-advantages',
    component: ServiceAdvantagesComponent,
  },
  {
    path: 'about-us',
    loadChildren: () => import('./business/about-us/about-us.module').then(m => m.AboutUsModule),
  },
  {
    path: 'parking-plan/programme-overview',
    loadChildren: () => import('./business/parking-plan/programme-overview/programme-overview.module').then(m => m.ProgrammeOverviewModule),
  },
  {
    path: 'parking-plan/core-products',
    loadChildren: () => import('./business/parking-plan/core-products/core-products.module').then(m => m.CoreProductsModule),
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
