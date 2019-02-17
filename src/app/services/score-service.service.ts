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
    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scores3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scores4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };
  gameInfo: Game = {
    teeType: '',
    courseID: '',
    holes: [],
    courseName: ''
  }
  constructor() { }
}
