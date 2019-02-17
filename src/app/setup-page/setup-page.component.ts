import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreServiceService } from '../services/score-service.service';
import { FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

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

  constructor(private router: Router,
  private scoreService: ScoreServiceService,
  private api: ApiServiceService
  ) { }

  ngOnInit() {
  }
  createCourse() {
    this.api.getCourse(this.scoreService.gameInfo.courseID).subscribe(data => {
      for (let i = 0; i < 18; i++){
        this.scoreService.gameInfo.holes[i] = data.data.holes[i].teeBoxes[this.scoreService.gameInfo.teeType];
      }
    });
    this.router.navigate(['cardPage']);
  }
}
