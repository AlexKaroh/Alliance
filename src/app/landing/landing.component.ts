import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PricesComponent } from '../prices/prices.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { GamesComponent } from '../games/games.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ScrollAnchorDirective } from '../directives/scroll-anchor.directive';
import { ScrollManagerDirective } from '../directives/scroll-manager.directive';
import { ScrollSectionDirective } from '../directives/scroll-section.directive';
import { LoaderComponent } from '../loader/loader.component';
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
    LoaderComponent,
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
    '../../styles.scss',
  ],
})
export class LandingComponent implements OnInit {
  public buttonSpans = Array(4);
  public headlineSpans = Array(2);
  public screenWidth: number;
  public activateBurger = false;
  public isLoading = true;
  public loadingDelay = false;
  public navList = [
    {
      anchor: 'about',
      label: 'О клубе',
    },
    { anchor: 'prices', label: 'Цены' },
    { anchor: 'equipment', label: 'Характеристики' },
    { anchor: 'games', label: 'Игры' },
    { anchor: 'contacts', label: 'Контакты' },
  ];

  toggleHamburger() {
    this.activateBurger = !this.activateBurger;
  }

  disableHamburger() {
    this.activateBurger = false;
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  @HostListener('window:load')
  onLoad() {
    this.loadingDelay = true;
    setTimeout(() => (this.isLoading = false), 1500);
  }
}
