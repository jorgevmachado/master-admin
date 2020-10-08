import { Component, OnInit } from '@angular/core';
import {NavOptions} from '../../interfaces/nav-options.interface';
import {HomeSidebar} from '../../../modules/home/home-routing.module';
import {VendasSidebar} from '../../../modules/vendas/vendas-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarNavItems: NavOptions[] = [
    HomeSidebar,
    VendasSidebar,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
