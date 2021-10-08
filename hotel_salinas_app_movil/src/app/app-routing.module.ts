import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      {
        path:'',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
      },
      {
        path:'signup',
        loadChildren: () => import('./auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
      {
        path:'signin',
        loadChildren: () => import('./auth/sign-in/sign-in.module').then( m => m.SignInPageModule)
      }
    ]
    
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
