import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ScoreServiceService} from '../services/score-service.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  constructor(private router: Router, private scoreService: ScoreServiceService) {

  }

  ngOnInit() {
  }

}
