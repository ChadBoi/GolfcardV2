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

  constructor(private router: Router,
              private scoreService: ScoreServiceService,
              private afs: AngularFirestore) {}

  ngOnInit() {
  this.storeGame();
  }

  storeGame() {
    this.afs.collection('gameInfo').doc('players').set(this.scoreService.players);
    this.afs.collection('gameInfo').doc('game').set(this.scoreService.gameInfo);
  }
}
