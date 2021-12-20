import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.page.html',
})
export class WatchedPage {
  watchedMovies$ = this.profileService.watchedMovies$;

  constructor(private profileService: ProfileService) {}

  goBack() {
    history.back();
  }
}
