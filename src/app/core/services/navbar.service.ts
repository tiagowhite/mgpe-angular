import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private sourceMessage = new BehaviorSubject(false);
  public currentMessage = this.sourceMessage.asObservable();

  constructor() { }

  changeMessage(message: boolean): void {
    this.sourceMessage.next(message);
  }


}
