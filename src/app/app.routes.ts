import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PaginaDunkComponent } from './components/pagina-dunk/pagina-dunk.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeComponentComponent }, 
      { path: 'pagina-dunk', component: PaginaDunkComponent }
    ]
  },
];
