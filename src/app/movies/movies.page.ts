import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage {
  movies$ = this.tmdbService.movies$;

  constructor(public tmdbService: TmdbService) {}

  loadMoreData(event: any) {
    this.tmdbService.getTrendingMovies(true);
    event.target.complete();
  }
}
