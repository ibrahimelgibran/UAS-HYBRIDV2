import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  public movies$ = new BehaviorSubject([]);

  private key = 'fbdda92469daa47c44106d6f62c6242d';
  private movies = [];
  private currentPage = 0;

  constructor(private http: HttpClient) {
    this.getTrendingMovies(true);
  }

  getTrendingMovies(scrolling?: boolean) {
    if (!scrolling) {
      this.movies$.next(this.movies);
    } else {
      this.currentPage++;
      this.http
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.key}&language=en-US&page=${this.currentPage}&include_adult=true`
        )
        .subscribe(
          (data: any) => {
            this.movies = [...this.movies, ...data.results];
            this.movies$.next(this.movies);
          },
          () => this.movies$.next([])
        );
    }
  }

  getMovie(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}`
    );
  }

  searchMovies(query: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${query}&page=1&include_adult=true`
    );
  }
}
