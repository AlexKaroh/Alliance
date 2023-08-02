import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
import { StopPropagationDirective } from '../directives/stop-propaginaton.directive';
import { Subscription } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PhoneFormatDirective } from '../directives/phone-format.directive';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    AboutComponent,
    PricesComponent,
    EquipmentComponent,
    GamesComponent,
    LoaderComponent,
    ContactsComponent,
    HttpClientModule,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
    StopPropagationDirective,
    PhoneFormatDirective,
  ],
  providers: [
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
  ],
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.scss',
    '../../styles.scss',
    '../../assets/styles/animated-btn.scss',
  ],
})
export class LandingComponent implements OnInit, OnDestroy {
  public buttonSpans = Array(4);
  public headlineSpans = Array(2);
  public screenWidth: number;
  public activateBurger = false;
  public isModalActive = false;
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

  public userDataGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    phone: [
      '+375',
      [
        Validators.required,
        this.phoneValidate(),
        Validators.pattern(/^\+375-\d{2}-\d{3}-\d{2}-\d{2}$/),
      ],
    ],
  });

  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private http: HttpClient, private meta: Meta) {}

  ngOnInit() {

    this.meta.updateTag({name: "title", content: "Alliance"})

    this.meta.updateTag({name: "description", content: "г. Минск, метро Уручье, Ложинская 4. Оффициальный сайт компьютерного клуба Alliance в Минске"})

    this.meta.updateTag({name: "image", content: "src/favicon.ico"})

    this.meta.updateTag({name: "keywords", content: "Комьютерый клуб, Комьютерый клуб уручье, Уручье, Компы, ПК клуб уручье, Поиграть уручье"})

    this.meta.updateTag({name: "creator", content: "AlexKaroh"})

    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  sendForm() {
    if (this.userDataGroup.invalid) {
      this.userDataGroup.markAllAsTouched();
      return;
    }

    const name = this.userDataGroup.controls.name.value;
    const phone = this.userDataGroup.controls.phone.value;
    const TOKEN = '6021106392:AAEx0RQbhbGMg7KU9cM2Hpq3HH425vk_uvQ';
    //main : 6342599091
    //test: 1428916942
    const CHAT_ID = '6342599091';
    const data = 'Имя: ' + name + '' + 'Телефон: ' + phone;
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${data}`;

    this.http.get(url).subscribe({
      next: () => {
        this.userDataGroup.reset();
        this.disableModal();
      },
      error: () => {
        this.userDataGroup.reset();
        this.disableModal();
      },
    });
  }

  activateModal() {
    this.isModalActive = true;
  }

  disableModal() {
    this.isModalActive = false;
  }

  toggleHamburger() {
    this.activateBurger = !this.activateBurger;
  }

  disableHamburger() {
    this.activateBurger = false;
  }

  @HostListener('window:load')
  onPageLoad() {
    this.loadingDelay = true;
    setTimeout(() => (this.isLoading = false), 1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private phoneValidate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length !== 17) {
        return { phoneValidate: 'Введите корректный номер телефона' };
      }
      return null;
    };
  }
}
