import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { HomeComponent } from './pages/home/home.component';
import { InquilinosComponent } from './pages/inquilinos/inquilinos.component';
import { LoginComponent } from './pages/login/login.component';
import { MetricasComponent } from './pages/metricas/metricas.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: AppLayout,
    children: [
      { path: 'main', component: HomeComponent },
      { path: 'Documentos', component: DocumentosComponent },
      { path: 'Metricas', component: MetricasComponent },
      { path: 'Inquilinos', component: InquilinosComponent },
      { path: 'Propiedades', component: PropiedadesComponent },
    ],
  },
];
