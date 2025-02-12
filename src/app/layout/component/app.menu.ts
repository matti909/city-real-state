import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `<ul class="layout-menu">
    @for (item of model; track item.id; let i = $index) {
      <ng-container>
        <li
          app-menuitem
          *ngIf="!item.separator"
          [item]="item"
          [index]="$index"
          [root]="true"
        ></li>
        <li *ngIf="item.separator" class="menu-separator"></li>
      </ng-container>
    }
  </ul> `,
})
export class AppMenu {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Administracion',
        items: [
          {
            label: 'Panel',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/dashboard/main'],
          },
          {
            label: 'Propiedades',
            icon: 'pi pi-building',
            routerLink: ['/dashboard/Propiedades'],
          },
          {
            label: 'Inquilinos',
            icon: 'pi pi-user',
            routerLink: ['/dashboard/Inquilinos'],
          },
          {
            label: 'Documentos',
            icon: 'pi pi-folder',
            routerLink: ['/dashboard/Documentos'],
          },
          {
            label: 'Metricas',
            icon: 'pi pi-chart-line',
            routerLink: ['/dashboard/Metricas'],
          },
        ],
      },
      {
        label: 'Configuracion',
        items: [{ label: 'Usuarios del sistema', icon: 'pi pi-cog' }],
      },
    ];
  }
}
