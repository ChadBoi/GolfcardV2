import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ScoreServiceService} from '../services/score-service.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  inScorePlayer1 = 0;
  inScorePlayer2 = 0;
  inScorePlayer3 = 0;
  inScorePlayer4 = 0;
  outScorePlayer1 = 0;
  outScorePlayer2 = 0;
  outScorePlayer3 = 0;
  outScorePlayer4 = 0;

  constructor(private router: Router,
              public scoreService: ScoreServiceService,
              private afs: AngularFirestore) {}

  ngOnInit() {
  this.storeGame();
  this.updateScores();
  }

  storeGame() {
    this.afs.collection('gameInfo').doc('players').set(this.scoreService.players);
    this.afs.collection('gameInfo').doc('game').set(this.scoreService.gameInfo);
  }

  updateScores() {
    this.scoreService.players.totalScore1 = 0;
    this.scoreService.players.totalScore2 = 0;
    this.scoreService.players.totalScore3 = 0;
    this.scoreService.players.totalScore4 = 0;
    this.inScorePlayer1 = 0;
    this.inScorePlayer2 = 0;
    this.inScorePlayer3 = 0;
    this.inScorePlayer4 = 0;
    this.outScorePlayer1 = 0;
    this.outScorePlayer2 = 0;
    this.outScorePlayer3 = 0;
    this.outScorePlayer4 = 0;
    for (let i = 0; i < 18; i++) {
      this.scoreService.players.totalScore1 += parseInt(String(this.scoreService.players.scores1[i]));
      this.scoreService.players.totalScore2 += parseInt(String(this.scoreService.players.scores2[i]));
      this.scoreService.players.totalScore3 += parseInt(String(this.scoreService.players.scores3[i]));
      this.scoreService.players.totalScore4 += parseInt(String(this.scoreService.players.scores4[i]));
      if (i < 9) {
        this.inScorePlayer1 += parseInt(String(this.scoreService.players.scores1[i]));
        this.inScorePlayer2 += parseInt(String(this.scoreService.players.scores2[i]));
        this.inScorePlayer3 += parseInt(String(this.scoreService.players.scores3[i]));
        this.inScorePlayer4 += parseInt(String(this.scoreService.players.scores4[i]));
      } else {
        this.outScorePlayer1 += parseInt(String(this.scoreService.players.scores1[i]));
        this.outScorePlayer2 += parseInt(String(this.scoreService.players.scores2[i]));
        this.outScorePlayer3 += parseInt(String(this.scoreService.players.scores3[i]));
        this.outScorePlayer4 += parseInt(String(this.scoreService.players.scores4[i]));
      }
    }
  }
}
