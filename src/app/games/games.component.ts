import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/types/game.interface';
import { ScrollAppearanceDirective } from '../directives/scroll-appearance.directive';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, ScrollAppearanceDirective],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss', '../../styles.scss']
})
export class GamesComponent {
  @Input() headlineSpans: void[];
  public games: Game[] = [
    { url: '../../assets/img/games/dota2.webp', title: 'Dota 2' },
    { url: '../../assets/img/games/cs.webp', title: 'CS:GO' },
    { url: '../../assets/img/games/fortnite.webp', title: 'Fortnite' },
    { url: '../../assets/img/games/apex.webp', title: 'Apex' },
    { url: '../../assets/img/games/valorant.webp', title: 'Valorant' },
    { url: '../../assets/img/games/pubg.webp', title: 'PUBG' },
    { url: '../../assets/img/games/gta.webp', title: 'GTA V' },
    { url: '../../assets/img/games/wart.webp', title: 'War Thunder' },
  ];
}
