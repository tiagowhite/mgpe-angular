import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavbarService} from './core/services/navbar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navbarState', [
      state('normal', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('stashed', style({
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'hidden',
        display: 'none'
      })),
      transition('normal <=> stashed', animate('300ms cubic-bezier(0.895, 0.03, 0.685, 0.22)'))
    ])
  ]
})

export class AppComponent implements OnInit, OnDestroy {

  message: boolean;
  state: string;

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.navbarService.currentMessage.subscribe(message => {
      this.message = message;
      this.state = this.message ? 'stashed' : 'normal';
    });
  }

  ngOnDestroy() {
    this.navbarService.currentMessage.subscribe();
  }


}
