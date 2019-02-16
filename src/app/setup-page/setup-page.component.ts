import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreServiceService } from '../services/score-service.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {
  courses = [
    {name: 'Fox Hollow', id: '0'},
    {name: 'Thanksgiving Point', id: '1'},
    {name: 'Spanish Oaks', id: '2'}
  ];
  tees = [
    {name: 'Pro', id: '0'},
    {name: 'Champion', id: '1'},
    {name: `Men's`, id: '2'},
    {name: `Women's`, id: '3'}
  ];

    player1 = new FormControl('', [Validators.required]);
    player2  = new FormControl();
    player3 = new FormControl();
    player4 = new FormControl();
    course = new FormControl('', [Validators.required]);
    tee = new FormControl('', [Validators.required]);

  constructor(private router: Router,
  private scoreService: ScoreServiceService
  ) { }

  ngOnInit() {
  }
  logName() {
    console.log(this.scoreService.players.player1);
    console.log(this.scoreService.gameInfo.teeType);
  }
}
