import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoadsideParkingSystemComponent} from './roadside-parking-system/roadside-parking-system.component';
import {OutRoadsideParkingSystemComponent} from './out-roadside-parking-system/out-roadside-parking-system.component';
import {TrafficGuidanceSystemComponent} from './traffic-guidance-system/traffic-guidance-system.component';
import {InFieldGuidanceSystemComponent} from './in-field-guidance-system/in-field-guidance-system.component';

const routes: Routes = [
  {
    path: 'roadside-parking-system',
    component: RoadsideParkingSystemComponent,
  },
  {
    path: 'out-roadside-parking-system',
    component: OutRoadsideParkingSystemComponent,
  },
  {
    path: 'traffic-guidance-system',
    component: TrafficGuidanceSystemComponent,
  },
  {
    path: 'in-field-guidance-system',
    component: InFieldGuidanceSystemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammeOverviewRoutingModule {
}
