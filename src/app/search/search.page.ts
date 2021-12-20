import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
})
export class SearchPage {
  public searchResult$: Observable<any>;

  constructor(private tmdbService: TmdbService) {}

  searchMovie(query: any) {
    if (query) {
      this.searchResult$ = this.tmdbService.searchMovies(query);
    }
  }
}
