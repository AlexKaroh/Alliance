import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', '../../assets/styles/animated-btn.scss', '../../assets/styles/adaptive.scss'],
})
export class LandingComponent {
  public buttonSpans = Array(4);
  public navLinks = []
}
