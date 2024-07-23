import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCardModule, FormsModule, MatInputModule, MatIconModule, PlayerComponent],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss'
})
export class EditPlayerComponent {

  allProfilePictures = ['1.webp', '2.jpg', '2.png', '2.webp', '3.webp', '4.webp'];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }
}
