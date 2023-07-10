import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LandingComponent } from './app/landing/landing.component';

bootstrapApplication(LandingComponent, {
  providers: [provideRouter([])],
});
