import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  watched$ = this.profileService.watchedMovies$;
  favorite$ = this.profileService.favoriteMovies$;
  watchlist$ = this.profileService.watchlist$;

  constructor(private profileService: ProfileService) {}
}
