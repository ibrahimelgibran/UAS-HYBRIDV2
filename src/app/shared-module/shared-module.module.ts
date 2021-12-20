import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule],
  exports: [MovieCardComponent, RouterModule],
})
export class SharedModuleModule {}
