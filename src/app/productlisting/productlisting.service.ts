import { Injectable, resource, signal } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductlistingService {
  private url = 'https://dummyjson.com/products';
  private products = signal<Map<number, Product>>(new Map());

  productResource = resource({
    loader: async () => {
      const response = await fetch(this.url);
      const data = await response.json();
      const products = data.products as Product[];
      
      // Store products in Map for easy lookup
      const productsMap = new Map(
        products.map(product => [product.id, product])
      );
      this.products.set(productsMap);
      
      return products;
    },
  }).asReadonly();

  getProduct(id: number): Product | undefined {
    return this.products()?.get(id);
  }

  getAllProducts(): Product[] {
    return Array.from(this.products().values());
  }
}