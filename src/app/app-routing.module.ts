import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PATH} from './app.constants';
import {AuthGuard} from './core/guards/auth.guard';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: PATH.HOME,
    loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: PATH.VENDAS.TITLE,
    loadChildren: () => import('./modules/vendas/vendas.module').then(module => module.VendasModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: PATH.HOME, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
