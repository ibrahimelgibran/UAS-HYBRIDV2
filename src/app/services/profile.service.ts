import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public watchedMovies$ = new BehaviorSubject(
    JSON.parse(localStorage.getItem('watchedMovies')) || []
  );
  public favoriteMovies$ = new BehaviorSubject(
    JSON.parse(localStorage.getItem('favoriteMovies')) || []
  );
  public watchlist$ = new BehaviorSubject(
    JSON.parse(localStorage.getItem('watchlist')) || []
  );

  constructor(private toastService: ToastService) {}

  addToWatchedMovies(movie) {
    if (localStorage.getItem('watchedMovies')) {
      const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
      if (watchedMovies.find((m) => m.id === movie.id)) {
        // todo: delete item quietly
        watchedMovies.splice(
          watchedMovies.findIndex((m) => m.id === movie.id),
          1
        );
        localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
        this.watchedMovies$.next(watchedMovies);
        this.toastService.showToast(
          `${movie.title} Removed from Watched Movies.`
        );
      } else {
        watchedMovies.push(movie);
        localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
        this.watchedMovies$.next(watchedMovies);
        this.toastService.showToast(`${movie.title} Added to Watched Movies.`);
      }
    } else {
      const watchedMovies = [];
      watchedMovies.push(movie);
      localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
      this.toastService.showToast(`${movie.title} Added to Watched Movies.`);
    }
  }

  addToFavoriteMovies(movie) {
    if (localStorage.getItem('favoriteMovies')) {
      const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
      if (favoriteMovies.find((m) => m.id === movie.id)) {
        favoriteMovies.splice(
          favoriteMovies.findIndex((m) => m.id === movie.id),
          1
        );
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        this.favoriteMovies$.next(favoriteMovies);
        this.toastService.showToast(
          `${movie.title} Removed from Favorite Movies.`
        );
      } else {
        favoriteMovies.push(movie);
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        this.favoriteMovies$.next(favoriteMovies);
        this.toastService.showToast(`${movie.title} Added to Favorite Movies.`);
      }
    } else {
      const favoriteMovies = [];
      favoriteMovies.push(movie);
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
      this.favoriteMovies$.next(favoriteMovies);
      this.toastService.showToast(`${movie.title} Added to Favorite Movies.`);
    }
  }

  addToWatchlist(movie) {
    if (localStorage.getItem('watchlist')) {
      const watchlist = JSON.parse(localStorage.getItem('watchlist'));
      if (watchlist.find((m) => m.id === movie.id)) {
        watchlist.splice(
          watchlist.findIndex((m) => m.id === movie.id),
          1
        );
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        this.watchlist$.next(watchlist);
        this.toastService.showToast(`${movie.title} Removed from Watchlist.`);
      } else {
        watchlist.push(movie);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        this.watchlist$.next(watchlist);
        this.toastService.showToast(`${movie.title} Added to Watchlist.`);
      }
    } else {
      const watchlist = [];
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      this.watchlist$.next(watchlist);
      this.toastService.showToast(`${movie.title} Added to Watchlist.`);
    }
  }

  isMovieInWatchedMovies(movie) {
    if (localStorage.getItem('watchedMovies')) {
      const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
      return watchedMovies.some((m) => m.id === movie.id);
    }
  }

  isMovieInFavoriteMovies(movie) {
    if (localStorage.getItem('favoriteMovies')) {
      const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
      return favoriteMovies.some((m) => m.id === movie.id);
    }
  }

  isMovieInWatchlist(movie) {
    if (localStorage.getItem('watchlist')) {
      const watchlist = JSON.parse(localStorage.getItem('watchlist'));
      return watchlist.some((m) => m.id === movie.id);
    }
  }
}
