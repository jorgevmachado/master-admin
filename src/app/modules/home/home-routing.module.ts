import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {PATH} from '../../app.constants';

const routes: Routes = [{path: '', data: { title: 'Home', endpoint: [`${PATH.HOME}`] }, component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
