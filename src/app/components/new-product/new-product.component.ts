import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, CommonModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  prodotti = [
    {
      title: 'Tuta Nike Tech Woven',
      description: '',
      imageUrl: '/immagini/tech.jpeg',
    },
    {
      title: 'Mercurial Dream Speed',
      description: '',
      imageUrl: '/immagini/mercurial-dream.jpg',

    },
    {
      title: 'Articoli per l\' inverno',
      description: '',
      imageUrl: 'immagini/winter.webp'
    },
    {
      title: 'Articoli da training',
      description: '',
      imageUrl: 'immagini/training.jpg'
    },
    {
      title: 'Articoli da running',
      description: '',
      imageUrl: 'immagini/running.jpg'
    }
  ];

  scrollSinistra() {
    const container = document.querySelector('.prodotti');
    if (container) {
      container.scrollBy({
        left: -200,  
        behavior: 'smooth'  
      });
    }
  }

 
  scrollDestra() {
    const container = document. querySelector('.prodotti');
    if (container) {
      container.scrollBy({
        left: 200,  
        behavior: 'smooth'  
      });
    }
  }
}

