import { Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productlisting } from "./productlisting/productlisting";
import { CartService } from './cart/cart-service';
import { SidebarComponent } from './shared/sidebar/sidebar';
import { CartComponent } from "./cart/cart";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Productlisting, SidebarComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
	@ViewChild('sidebar') sidebar!: SidebarComponent;

	cartService = inject(CartService);

	handleOpenCart(){
		this.sidebar.open();
	}
}
