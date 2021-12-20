import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchedPage } from './watched.page';

const routes: Routes = [
  {
    path: '',
    component: WatchedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchedPageRoutingModule {}
