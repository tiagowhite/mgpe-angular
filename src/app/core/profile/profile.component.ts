import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../services/navbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  message: boolean;

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.navbarService.currentMessage.subscribe(message => this.message = message);
  }

  stash(): boolean {
    let state;
    state = !this.message;
    this.navbarService.changeMessage(state);
    return state;
  }


}
