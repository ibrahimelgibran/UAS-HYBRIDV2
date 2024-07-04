import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritePage } from './favorite.page';

// Mendefinisikan rute untuk halaman FavoritePage
const routes: Routes = [
  {
    path: '',
    component: FavoritePage,
  },
];

@NgModule({
  // Mengimpor konfigurasi rute
  imports: [RouterModule.forChild(routes)],
  // Mengekspor RouterModule agar dapat digunakan di modul lain
  exports: [RouterModule],
})
export class FavoritePageRoutingModule {}
