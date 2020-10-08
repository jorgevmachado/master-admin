import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {CoreModule} from '../core/core.module';
import { CpfPipe } from './pipes/cpf.pipe';
import { MesesPipe } from './pipes/meses.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';

@NgModule({
  declarations: [
    CpfPipe,
    MesesPipe,
    NotFoundComponent,
    SidebarComponent,
    RouterOutletComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CommonModule,
    SidebarComponent,
  ]
})
export class SharedModule { }
