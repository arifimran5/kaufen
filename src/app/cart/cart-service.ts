import { Injectable, signal, computed } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	private STORAGE_KEY = 'cart_items';
	private cartItems = signal<Map<number, number>>(this.loadCartFromStorage());

	constructor() {
		// Initialize cart from localStorage when service is created
		this.loadCartFromStorage();
	}

	private loadCartFromStorage(): Map<number, number> {
		const savedCart = localStorage.getItem(this.STORAGE_KEY);
		if (savedCart) {
			return new Map(JSON.parse(savedCart));
		}
		return new Map();
	}

	private saveCartToStorage(cart: Map<number, number>): void {
		// Convert Map to array before storing
		localStorage.setItem(
			this.STORAGE_KEY,
			JSON.stringify(Array.from(cart.entries()))
		);
	}

	readonly totalItems = computed(() => {
		let total = 0;
		this.cartItems().forEach((quantity) => {
			total += quantity;
		});
		return total;
	});

	readonly items = computed(() => this.cartItems());

	addToCart(productId: number): void {
		const currentCart = new Map(this.cartItems());
		currentCart.set(productId, 1);
		this.cartItems.set(currentCart);
		this.saveCartToStorage(currentCart);
	}

	updateCartItem(productId: number, quantity: number): void {
		const currentCart = new Map(this.cartItems());
		if (currentCart.has(productId)) {
			currentCart.set(productId, quantity);
			this.cartItems.set(currentCart);
			this.saveCartToStorage(currentCart);
		}
	}

	incrementCartItem(productId: number): void {
		const currentCart = new Map(this.cartItems());
		if (currentCart.has(productId)) {
			const currentQuantity = currentCart.get(productId) || 0;
			currentCart.set(productId, currentQuantity + 1);
			this.cartItems.set(currentCart);
			this.saveCartToStorage(currentCart);
		}
	}

	decrementCartItem(productId: number): void {
		const currentCart = new Map(this.cartItems());
		if (currentCart.has(productId)) {
			const currentQuantity = currentCart.get(productId) || 0;
			if (currentQuantity > 1) {
				currentCart.set(productId, currentQuantity - 1);
			} else {
				currentCart.delete(productId);
			}
			this.cartItems.set(currentCart);
			this.saveCartToStorage(currentCart);
		}
	}

	removeFromCart(productId: number): void {
		const currentCart = new Map(this.cartItems());
		currentCart.delete(productId);
		this.cartItems.set(currentCart);
		this.saveCartToStorage(currentCart);
	}

	clearCart(): void {
		this.cartItems.set(new Map());
		localStorage.removeItem(this.STORAGE_KEY);
	}
}
