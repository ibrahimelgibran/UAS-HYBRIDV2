import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { WatchlistPageRoutingModule } from './watchlist-routing.module';
import { WatchlistPage } from './watchlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchlistPageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [WatchlistPage],
})
export class WatchlistPageModule {}
