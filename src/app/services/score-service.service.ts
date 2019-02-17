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
    totalScore1: 0,
    totalScore2: 0,
    totalScore3: 0,
    totalScore4: 0,
    scores1: [],
    scores2: [],
    scores3: [],
    scores4: []
  };
  gameInfo: Game = {
    teeType: '',
    courseID: '',
    holes: []
  }
  constructor() { }
}
