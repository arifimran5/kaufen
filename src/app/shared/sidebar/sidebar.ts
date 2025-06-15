import {
	Component,
	signal,
	input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-sidebar',
	imports: [CommonModule],
	template: `
		<div
			class="sidebar-container"
			[class.active]="isOpen()"
			role="dialog"
			aria-modal="true"
		>
			<div
				class="sidebar-backdrop"
				(click)="close()"
				*ngIf="isOpen()"
				[@fadeInOut]
			></div>

			<aside
				class="sidebar"
				[class.open]="isOpen()"
				[ngStyle]="{ 'max-width': width() }"
				[@slideInOut]
			>
				<header class="sidebar-header">
					<h2 *ngIf="headerText()" class="sidebar-title">
						{{ headerText() }}
					</h2>
					<button
						class="close-button"
						(click)="close()"
						aria-label="Close sidebar"
					>
						✕
					</button>
				</header>

				<div class="sidebar-content">
					<ng-content></ng-content>
				</div>
			</aside>
		</div>
	`,
	styleUrl: './sidebar.css',
})
export class SidebarComponent {
	isOpen = signal(false);

	headerText = input<string>('');
	width = input<string>('');

	open(): void {
		this.isOpen.set(true);
		document.body.style.overflow = 'hidden';
	}

	close(): void {
		this.isOpen.set(false);
		document.body.style.overflow = '';
	}

	toggle(): void {
		if (this.isOpen()) {
			this.close();
		} else {
			this.open();
		}
	}
}
