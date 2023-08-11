import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentItem } from 'src/types/equipment-item.interface';
import { ScrollAppearanceDirective } from '../directives/scroll-appearance.directive';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, ScrollAppearanceDirective],
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss', '../../styles.scss'],
})
export class EquipmentComponent {
  @Input() headlineSpans: void[];
  public equipmentItems: EquipmentItem[] = [
    {
      url: '../../assets/img/icons/monitor.svg',
      device: 'Монитор',
      model: 'GIGABYTE G27F/G24F 165ГРЦ',
    },
    {
      url: '../../assets/img/icons/videokarta.svg',
      device: 'Видеокарта',
      model: 'GEFORCE RTX 3050',
    },
    {
      url: '../../assets/img/icons/processor.svg',
      device: 'Процессор',
      model: 'INTEL CORE I3-12100F',
    },
    {
      url: '../../assets/img/icons/ozu.svg',
      device: 'Оперативная память',
      model: '16GB DDR4',
    },
    {
      url: '../../assets/img/icons/mouse.svg',
      device: 'Мышь',
      model: 'HYPERX PULSEFIRE HASTE',
    },
    {
      url: '../../assets/img/icons/keyboard.svg',
      device: 'Клавиатура',
      model: 'RED SQUARE KEYROX TKL CLASSIC',
    },
    {
      url: '../../assets/img/icons/headphones.svg',
      device: 'Наушники',
      model: 'HYPERX CLOUD 2',
    },
    {
      url: '../../assets/img/icons/chair.svg',
      device: 'Кресло',
      model: 'ZOMBIE WIKING AERO 5',
    },
  ];
}
