import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInterface } from 'src/types/slide.interface';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../styles.scss'],
})
export class AboutComponent {
  public slides: SlideInterface[] = [
    { url: '../../assets/img/slider/pc-places-dark.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places-small.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places-radiant.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places-dire.webp', title: 'PC' },
  ];
}
