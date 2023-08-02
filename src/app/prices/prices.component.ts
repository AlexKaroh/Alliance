import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAppearanceDirective } from '../directives/scroll-appearance.directive';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule, ScrollAppearanceDirective],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss', '../../styles.scss'],
})
export class PricesComponent {
  @Input() headlineSpans: void[];
  @Input() screenWidth: number;
}
