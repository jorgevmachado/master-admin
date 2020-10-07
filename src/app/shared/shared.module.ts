import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {CoreModule} from '../core/core.module';
import { CpfPipe } from './pipes/cpf.pipe';
import { MesesPipe } from './pipes/meses.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    CpfPipe,
    MesesPipe,
    NotFoundComponent,
    SidebarComponent
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
