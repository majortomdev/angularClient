import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    imports: [MatIconModule]
  }

}
