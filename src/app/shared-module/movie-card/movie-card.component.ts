import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;

  isWatched: boolean;
  isFavorite: boolean;
  isWatchlist: boolean;

  constructor(public profileService: ProfileService) {}

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

  ngOnInit() {
    this.isWatched = this.profileService.isMovieInWatchedMovies(this.movie);
    this.isFavorite = this.profileService.isMovieInFavoriteMovies(this.movie);
    this.isWatchlist = this.profileService.isMovieInWatchlist(this.movie);
  }
}
