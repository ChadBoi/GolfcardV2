import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreServiceService } from '../services/score-service.service';
import { FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {
  courses = [
    {name: 'Fox Hollow', id: '18300'},
    {name: 'Thanksgiving Point', id: '11819'},
    {name: 'Spanish Oaks', id: '19002'}
  ];
  tees = [
    {name: 'Pro', id: '0'},
    {name: 'Champion', id: '1'},
    {name: `Men's`, id: '2'},
    {name: `Women's`, id: '3'}
  ];
  course = new FormControl();
  tee = new FormControl();
  constructor(private router: Router,
              public scoreService: ScoreServiceService,
              private api: ApiServiceService,
              private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }
  createCourse() {
    if (this.scoreService.players.player1 === this.scoreService.players.player2) {
      this.scoreService.players.player2 = this.scoreService.players.player2 + Math.floor(Math.random() * 1000);
    }
    if (this.scoreService.players.player2 === this.scoreService.players.player3 && this.scoreService.players.player2 !== ''
      || this.scoreService.players.player1 === this.scoreService.players.player3) {
      this.scoreService.players.player3 = this.scoreService.players.player3 + Math.floor(Math.random() * 1000);
    }
    if (this.scoreService.players.player3 === this.scoreService.players.player4 && this.scoreService.players.player4 !== ''
      || this.scoreService.players.player2 === this.scoreService.players.player4 && this.scoreService.players.player4 !== ''
      || this.scoreService.players.player1 === this.scoreService.players.player4) {
      this.scoreService.players.player4 = this.scoreService.players.player4 + Math.floor(Math.random() * 1000);
    }
    this.api.getCourse(this.scoreService.gameInfo.courseID).subscribe(data => {
      this.scoreService.gameInfo.courseName = data.data.name;
      for (let i = 0; i < 18; i++){
        this.scoreService.gameInfo.holes[i] = data.data.holes[i].teeBoxes[this.scoreService.gameInfo.teeType];
      }
    });
    this.router.navigate(['cardPage']);
  }
  async loadCourse() {
    await this.afs.collection('gameInfo').doc('game').ref.onSnapshot(doc => {
      this.scoreService.gameInfo.courseName = doc.data().courseName;
      this.api.getCourse(doc.data().courseID).subscribe(data => {
        for (let i = 0; i < 18; i++) {
          this.scoreService.gameInfo.holes[i] = data.data.holes[i].teeBoxes[doc.data().teeType];
        }
      });
    });
    await this.afs.collection('gameInfo').doc('players').ref.onSnapshot(doc => {
      this.scoreService.players.player1 = doc.data().player1;
      this.scoreService.players.player2 = doc.data().player2;
      this.scoreService.players.player3 = doc.data().player3;
      this.scoreService.players.player4 = doc.data().player4;
      for (let i = 0; i < 18; i++) {
        this.scoreService.players.scores1[i] = doc.data().scores1[i];
        this.scoreService.players.scores2[i] = doc.data().scores2[i];
        this.scoreService.players.scores3[i] = doc.data().scores3[i];
        this.scoreService.players.scores4[i] = doc.data().scores4[i];
      }
    });
    this.router.navigate(['cardPage']);
  }
}
