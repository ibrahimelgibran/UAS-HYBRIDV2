import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
})
export class WatchlistPage {
  watchlist$ = this.profileService.watchlist$;

  constructor(private profileService: ProfileService) {}

  goBack() {
    history.back();
  }
}
