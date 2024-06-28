import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'watched',
    loadChildren: () =>
      import('./watched/watched.module').then((m) => m.WatchedPageModule),
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('./favorite/favorite.module').then((m) => m.FavoritePageModule),
  },
  {
    path: 'watchlist',
    loadChildren: () =>
      import('./watchlist/watchlist.module').then((m) => m.WatchlistPageModule),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.module').then((m) => m.NotesPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
