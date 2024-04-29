import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Waterfall', description: ' The player who picks up the card starts drinking. The person to their left then starts drinking, and so on. You cannot stop drinking until the person before you stops.' },
    { title: 'You', description: 'Nominate someone to drink.' },
    { title: 'Me', description: 'You have to drink.' },
    { title: 'Category', description: 'Choose a category (dogs, lager brands, supermarkets, etc.) and go in a circle naming something related to that category.' },
    { title: 'Bust a jive', description: ' Say a word. Then the person to your left must rhyme with that word. This carries on until someone messes up or hesitates.' },
    { title: 'Chicks', description: 'All the women must drink.' },
    { title: 'Heaven', description: 'Point to the heavens. Last person to do so drinks.' },
    { title: 'Mate', description: 'Choose a mate to drink with you. They must now match you until the next 8 is picked.' },
    { title: 'Thumbmaster', description: 'You are the thumb master until the next 4 is picked. Put your thumb on a surface. Everyone must copy you. The last person to do so drinks.' },
    { title: 'Men', description: 'All the guys must drink.' },
    { title: 'Quizmaster', description: 'You are now the question master until the next Queen is picked. If you ask someone a question and they answer, they have to drink.' },
    { title: 'Never have i ever ...', description: 'Say something you never did. Everyoanewho did it has to drink.' },
    { title: 'Rule', description: 'The ultimate card. You make a rule and everyone MUST obey.' },
  ];

  title = '';
  description = '';
  @Input()
  card!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
};
