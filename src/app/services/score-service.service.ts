import { Injectable } from '@angular/core';
import {Player} from '../interfaces/player';
import {Game} from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {
  players: Player = {
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    score: 0,
    id: 0
  };
  gameInfo: Game = {
    teeType: '',
    courseID: '',
    holes: []
  }
  constructor() { }
}
