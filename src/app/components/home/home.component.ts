import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NewProductComponent } from '../new-product/new-product.component';
import { TopSellerComponent } from '../top-seller/top-seller.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent,NewProductComponent,TopSellerComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
