import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  movie: any;
  stars: any = new Array(5).fill('star-outline');

  isWatched: boolean;
  isFavorite: boolean;
  isWatchlist: boolean;

  constructor(
    private tmdbService: TmdbService,
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        mergeMap((id) => this.tmdbService.getMovie(id))
      )
      .subscribe((movie: any) => {
        this.movie = movie;
        new Array(Math.round(movie.vote_average / 2))
          .fill(0)
          .forEach((_, i) => {
            this.stars[i] = 'star';
          });
        this.isWatched = this.profileService.isMovieInWatchedMovies(this.movie);
        this.isFavorite = this.profileService.isMovieInFavoriteMovies(
          this.movie
        );
        this.isWatchlist = this.profileService.isMovieInWatchlist(this.movie);
      });
  }

  goBack() {
    history.back();
  }

  addToWatchedMovies() {
    this.profileService.addToWatchedMovies(this.movie);
    this.isWatched = !this.isWatched;
  }

  addToFavoriteMovies() {
    this.profileService.addToFavoriteMovies(this.movie);
    this.isFavorite = !this.isFavorite;
  }

  addToWatchlist() {
    this.profileService.addToWatchlist(this.movie);
    this.isWatchlist = !this.isWatchlist;
  }
}
