import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart-service';
import { ProductlistingService } from '../productlisting/productlisting.service';
import { Product } from '../productlisting/product.model';

@Component({
	selector: 'app-cart',
	imports: [CommonModule],
	templateUrl: './cart.html',
	styleUrl: './cart.css',
})
export class CartComponent {
	cartService = inject(CartService);
	productService = inject(ProductlistingService);

	cartItems = computed(() => {
		const items: { id: number; product: Product; quantity: number }[] = [];

		this.cartService.items().forEach((quantity, productId) => {
			const product = this.productService.getProduct(productId);
			if (product) {
				items.push({ id: productId, product, quantity });
			}
		});

		return items;
	});

	totalPrice = computed(() => {
    return this.cartItems().reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  });
}
