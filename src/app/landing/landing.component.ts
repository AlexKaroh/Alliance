import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PricesComponent } from '../prices/prices.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { GamesComponent } from '../games/games.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ScrollAnchorDirective } from '../directives/scroll-anchor.directive';
import { ScrollManagerDirective } from '../directives/scroll-manager.directive';
import { ScrollSectionDirective } from '../directives/scroll-section.directive';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    AboutComponent,
    PricesComponent,
    EquipmentComponent,
    GamesComponent,
    ContactsComponent,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
  ],
  providers: [
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
  ],
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.scss',
    '../../assets/styles/animated-btn.scss',
    '../../assets/styles/adaptive.scss',
  ],
})
export class LandingComponent {
  public buttonSpans = Array(4);
  public headlineSpans = Array(2);
}
