import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LandingMainComponent } from './landing-main.component';
import { LandingHeaderComponent } from './landing-header.component';
import { LandingFooterComponent } from './landing-footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LandingHeaderComponent,
    LandingMainComponent,
    LandingFooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}
