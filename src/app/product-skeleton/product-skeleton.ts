import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from '../shared/skeletonloader/skeleton';

@Component({
	selector: 'app-product-skeleton',
	imports: [CommonModule, SkeletonComponent],
	template: `
		<div class="product">
			<div class="product_image_container">
				<app-skeleton width="295px" height="250px" />
			</div>
			<app-skeleton width="80%" height="24px" class="title-skeleton" />
			<app-skeleton width="100%" height="16px" />
			<div class="product_price_cart">
				<app-skeleton width="100px" height="30px" />
				<app-skeleton width="120px" height="45px" />
			</div>
		</div>
	`,
	styles: [
		`
			.product {
				max-width: 20rem;
				display: flex;
				flex-direction: column;
				margin-bottom: 15px;
				background: white;
				border: 3px solid #000;
				box-shadow: 8px 8px 0 #343a40;
				padding: 10px;
			}

			.title-skeleton {
				margin: 8px 0;
			}

			.product_price_cart {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 1rem;
			}
		`,
	],
})
export class ProductSkeletonComponent {}
