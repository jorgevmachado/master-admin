import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PATH} from '../../app.constants';
import {NavOptions} from '../../shared/interfaces/nav-options.interface';
import {AuthGuard} from '../../core/guards/auth.guard';
import {ListarComponent} from './components/proposta/listar/listar.component';

export const VendasSidebar: NavOptions = {
  routerLink: [``],
  title: 'Vendas',
  icon: 'home',
  roles: [],
  isCollapsed: true,
  children: [
    {
      routerLink: [`${PATH.VENDAS.TITLE}/${PATH.VENDAS.PROPOSTA}`],
      title: 'Proposta',
      icon: 'home',
      roles: [],
      isCollapsed: true
    }
  ]
};
const routes: Routes = [
  {
    path: '',
    data: {
      endpoint: [`${PATH.VENDAS.TITLE}/${PATH.VENDAS.PROPOSTA}`],
    },
    children: [
      {
        path: PATH.VENDAS.PROPOSTA,
        canActivateChild: [AuthGuard],
        component: ListarComponent,
      },
      // {
      //   path: '',
      //   component: ListarComponent,
      //   data: {
      //     title: 'Proposta',
      //     expectedRoles: []
      //   }
      // }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule {}
