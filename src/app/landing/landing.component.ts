import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SlideInterface } from '../../types/slide.interface';
import { SliderComponent } from '../slider/slider.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    SliderComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', '../../assets/styles/animated-btn.scss', '../../assets/styles/adaptive.scss'],
})
export class LandingComponent {
  public buttonSpans = Array(4);
  public navLinks = [];
  public slides: SlideInterface[] = [
    { url: "../../assets/img/logo-logo.svg", title: "PC"},
    { url: "../../assets/img/logo-text.svg", title: "PC"},
    { url: "../../assets/img/about-bg.svg", title: "PC"}
  ];

}
