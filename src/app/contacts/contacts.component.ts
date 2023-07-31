import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/types/contact.interface';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss', '../../styles.scss'],
})
export class ContactsComponent {
  @Input() headlineSpans: void[];
  @Input() screenWidth: number;
  public contacts: Contact[] = [
    {
      info: 'Адрес',
      contact: ' Уручье , Ложинская 4 БЦ «Порт»',
      url: '../../assets/img/location.svg',
    },
    {
      info: 'Телефон',
      contact: ' +375445214449',
      url: '../../assets/img/phone-contact.svg',
    },
    {
      info: 'Telegram',
      contact: ' @alliancecyberclub',
      url: '../../assets/img/tg.svg',
    },
    {
      info: 'Instagram',
      contact: ' @alliance_cyber_club',
      url: '../../assets/img/instagram.svg',
    },
    {
      info: 'Время работы',
      contact: ' Круглосуточно 24/7',
      url: '../../assets/img/timer-contact.svg',
    },
  ];
}
