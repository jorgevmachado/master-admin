import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {VendasRoutingModule} from './vendas-routing.module';
import { ListarComponent } from './components/proposta/listar/listar.component';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CoreModule,
    VendasRoutingModule
  ],
  exports: [ListarComponent]
})
export class VendasModule { }
