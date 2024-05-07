import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore/firebase';
import { Router } from '@angular/router';
import { Game } from '../../models/game';


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  firestore: Firestore = inject(Firestore);
  game: any;

  constructor(private router: Router) { }

  async newGame() {
    //Start Game
    let game = new Game();
    await addDoc(collection(this.firestore, 'games'), game.toJson()).then((gameInfo: any) => {
      console.log(gameInfo);
    });
    this.router.navigateByUrl('/game');
  }
}


