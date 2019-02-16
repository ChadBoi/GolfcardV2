import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
