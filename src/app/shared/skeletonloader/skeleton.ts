import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton',
  imports: [CommonModule],
  template: `
    <div 
      class="skeleton-loader" 
      [style.width]="width"
      [style.height]="height"
      [class.rounded]="rounded">
    </div>
  `,
  styles: [`
    .skeleton-loader {
      background: linear-gradient(
        90deg,
        #dedede 25%,
        #f5f5f5 50%,
        #dedede 75%
      );
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }

    .rounded {
      border-radius: 4px;
    }

    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class SkeletonComponent {
  @Input() width = '100%';
  @Input() height = '20px';
  @Input() rounded = true;
}