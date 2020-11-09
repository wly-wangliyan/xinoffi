import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WireFreeCameraComponent} from './wire-free-camera/wire-free-camera.component';
import {RoadsideCameraComponent} from './roadside-camera/roadside-camera.component';
import {VideoPostComponent} from './video-post/video-post.component';

const routes: Routes = [
  {
    path: 'wire-free-camera',
    component: WireFreeCameraComponent
  },
  {
    path: 'roadside-camera',
    component: RoadsideCameraComponent
  },
  {
    path: 'video-post',
    component: VideoPostComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreProductsRoutingModule {
}
