import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SlideInterface } from '../../types/slide.interface';
import { SliderComponent } from '../slider/slider.component';
import { EquipmentItem } from 'src/types/equipment-item.interface';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, SliderComponent],
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
  public slides: SlideInterface[] = [
    { url: '../../assets/img/slider/pc-places-dark.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places-small.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places-radiant.webp', title: 'PC' },
    { url: '../../assets/img/slider/pc-places-dire.webp', title: 'PC' },
  ];
  public equipmentItems: EquipmentItem[] = [
    {
      url: '../../assets/img/icons/monitor.svg',
      device: 'Монитор',
      model: 'GIGABYTE G27F/G24F 165ГРЦ',
    },
    {
      url: '../../assets/img/icons/processor.svg',
      device: 'Процессор',
      model: 'INTEL CORE I3-12100F',
    },
    {
      url: '../../assets/img/icons/videokarta.svg',
      device: 'Видеокарта',
      model: 'GEFORCE RTX 3050',
    },
    {
      url: '../../assets/img/icons/ozu.svg',
      device: 'Оперативная память',
      model: '8GB DDR4',
    },
    {
      url: '../../assets/img/icons/headphones.svg',
      device: 'Наушники',
      model: 'HYPERX CLOUD 2',
    },
    {
      url: '../../assets/img/icons/keyboard.svg',
      device: 'Клавиатура',
      model: 'RED SQUARE KEYROX TKL CLASSIC',
    },
    {
      url: '../../assets/img/icons/mouse.svg',
      device: 'Мышь',
      model: 'HYPERX PULSEFIRE HASTE',
    },
    {
      url: '../../assets/img/icons/chair.svg',
      device: 'Кресло',
      model: 'ZOMBIE WIKING AERO 5',
    },
  ];
}
