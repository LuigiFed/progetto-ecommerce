import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-seller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss']
})
export class TopSellerComponent {
item: any;

  constructor() {} 

  topSeller = [
    { title: 'Air Max', description: '', imageUrl: '/immagini/airmax.jpeg' },
    { title: 'Air Force 1', description: '', imageUrl: '/immagini/air force.jpeg' },
    { title: 'Dunk', description: '', imageUrl: 'immagini/dunk.webp' },
    { title: 'V2K', description: '', imageUrl: 'immagini/vk2.webp' },
    { title: 'Air Jordan', description: '', imageUrl: 'immagini/air-jordan.webp' },
    { title: 'Mercurial', description: '', imageUrl: '/immagini/mercurial.webp' }
  ];

  getRouterLink(topSeller: any): string {
    if (topSeller.title === 'Dunk') {
      return '/home/pagina-dunk'; // 
    }
    return ''; 
  }
  // Funzione per scrollare a sinistra
  scrollSinistra() {
    const container = document.querySelector('.top-seller');
    if (container) {
      container.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  }

  // Funzione per scrollare a destra
  scrollDestra() {
    const container = document.querySelector('.top-seller');
    if (container) {
      container.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  }
}
