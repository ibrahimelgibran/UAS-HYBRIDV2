import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
})
export class FavoritePage {
  favoriteMovies$ = this.profileService.favoriteMovies$;

  constructor(private profileService: ProfileService) {}

  goBack() {
    history.back();
  }
}
