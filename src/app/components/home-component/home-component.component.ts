import { Component } from '@angular/core';
import { NewProductComponent } from '../new-product/new-product.component';
import { TopSellerComponent } from '../top-seller/top-seller.component';
;

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [NewProductComponent,TopSellerComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

}
