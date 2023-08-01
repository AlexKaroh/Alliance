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
      href: 'https://yandex.by/maps/-/CXB7e5C'
    },
    {
      info: 'Телефон',
      contact: ' +375445214449',
      url: '../../assets/img/phone-contact.svg',
      href: 'tel:+375445214449'
    },
    {
      info: 'Telegram',
      contact: ' @alliancecyberclub',
      url: '../../assets/img/tg.svg',
      href: 'https://t.me/alliancecyberclub'
    },
    {
      info: 'Instagram',
      contact: ' @alliance_cyber_club',
      url: '../../assets/img/instagram.svg',
      href: 'https://instagram.com/alliance_cyber_club'
    },
    {
      info: 'Время работы',
      contact: ' Круглосуточно 24/7',
      url: '../../assets/img/timer-contact.svg',
      href: 'tel:+375445214449'
    },
  ];
}
