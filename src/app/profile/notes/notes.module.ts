import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { NotesPageRoutingModule } from './notes-routing.module';
import { NotesPage } from './notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [NotesPage],
})
export class NotesPageModule {}
