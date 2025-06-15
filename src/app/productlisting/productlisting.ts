import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, output, resource } from '@angular/core';
import { ProductSkeletonComponent } from '../product-skeleton/product-skeleton';
import { Product } from './product.model';
import { CartService } from '../cart/cart-service';
import { ProductlistingService } from './productlisting.service';

@Component({
	selector: 'app-productlisting',
	imports: [CommonModule, NgOptimizedImage, ProductSkeletonComponent],
	templateUrl: './productlisting.html',
	styleUrl: './productlisting.css',
})
export class Productlisting {
	url = 'https://dummyjson.com/products';

	cartService = inject(CartService);
	productService = inject(ProductlistingService)

	openCart = output<void>();

	productResource = this.productService.productResource;

	isInCart(productId: number): boolean {
		return this.cartService.items().has(productId);
	}

	addToCart(productId: number): void {
		if(this.isInCart(productId)){
			this.openCart.emit();
		}else{
			this.cartService.addToCart(productId);
		}
	}
}
