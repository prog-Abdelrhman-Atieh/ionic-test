import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPagePage } from './pages/main-page/main-page.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'main',
    loadChildren:()=>import('./pages/main-page/main-page.module').then(m=>m.MainPagePageModule),
    canActivate:[AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: '**',
    redirectTo:'main'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
