import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
})
export class FavoritePage {
  // Observable yang berisi daftar film favorit
  favoriteMovies$ = this.profileService.favoriteMovies$;

  // Menginisialisasi ProfileService untuk mengambil data film favorit
  constructor(private profileService: ProfileService) {}

  // Metode untuk kembali ke halaman sebelumnya
  goBack() {
    history.back();
  }
}
