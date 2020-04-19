import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'spiner', loadChildren: './spiner/spiner.module#SpinerPageModule' },
  { path: 'animales', loadChildren: './animales/animales.module#AnimalesPageModule' },
  { path: 'numeros', loadChildren: './numeros/numeros.module#NumerosPageModule' },
  { path: 'colores', loadChildren: './colores/colores.module#ColoresPageModule' },  { path: 'seleccion-de-juego', loadChildren: './seleccion-de-juego/seleccion-de-juego.module#SeleccionDeJuegoPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
