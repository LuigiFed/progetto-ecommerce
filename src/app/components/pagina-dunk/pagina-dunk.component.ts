import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-dunk',
  standalone: true,
  imports: [],
  templateUrl: './pagina-dunk.component.html',
  styleUrls: ['./pagina-dunk.component.scss']
})
export class PaginaDunkComponent {


  mainImage: string = 'immagini/4.jpg';

  updateMainImage(imageUrl: string): void {
    this.mainImage = imageUrl;
  }

}

