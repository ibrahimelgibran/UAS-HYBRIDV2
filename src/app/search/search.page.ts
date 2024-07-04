import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
})
export class SearchPage {
  // Observable untuk menyimpan hasil pencarian film yang akan ditampilkan
  public searchResult$: Observable<any>;

  // Variabel untuk menentukan apakah pengguna sedang offline atau tidak
  isOffline = !navigator.onLine;

  constructor(private tmdbService: TmdbService) {}

  // Metode untuk melakukan pencarian film berdasarkan query yang diberikan
  searchMovie(query: any) {
    // Memeriksa apakah query tidak kosong
    if (query) {
      // Memanggil layanan TmdbService untuk melakukan pencarian film
      this.searchResult$ = this.tmdbService.searchMovies(query);
    }
  }
}
