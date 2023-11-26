import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor() {}

  private isHamburgerActiveSubject = new BehaviorSubject<boolean>(false);
  isHamburgerActive$ = this.isHamburgerActiveSubject.asObservable();

  toggleHamburgerState() {
    const currentState = this.isHamburgerActiveSubject.value;
    this.isHamburgerActiveSubject.next(!currentState);
  }
}
