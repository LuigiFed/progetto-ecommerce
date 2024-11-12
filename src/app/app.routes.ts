
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaginaDunkComponent } from './components/pagina-dunk/pagina-dunk.component';



export const routes: Routes = [
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home', component: HomeComponent,
      children: [
        { path: 'pagina-dunk', component: PaginaDunkComponent },
      ]
    },
   
  ];

