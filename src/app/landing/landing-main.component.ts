import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingMainComponent {
  title = 'Alliance';
}
