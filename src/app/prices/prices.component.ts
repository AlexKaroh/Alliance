import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss', '../../styles.scss'],
})
export class PricesComponent {
  @Input() headlineSpans: void[];
  @Input() screenWidth: number;
}
