import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './pages/login/login.component';
export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: AppLayout,
    children: [{ path: 'main', component: MainComponent }],
  },
];
