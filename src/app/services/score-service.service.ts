import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {
  player: Player;

  constructor() { }
}
