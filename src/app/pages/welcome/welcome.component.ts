import { Component, OnInit } from '@angular/core';

import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faDoorOpen = faDoorOpen;
  constructor() { }

  ngOnInit() {
  }

}
