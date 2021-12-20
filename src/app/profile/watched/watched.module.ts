import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { WatchedPageRoutingModule } from './watched-routing.module';
import { WatchedPage } from './watched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchedPageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [WatchedPage],
})
export class WatchedPageModule {}
