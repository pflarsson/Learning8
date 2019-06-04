import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState } from './store.state';

@Component({
  selector: 'app-store',
  template: `
    <h1>Count is {{count$ | async}}</h1>
    <button (click)="onClick()">Click Me</button>
  `
})
export class AppComponent  {

  @Select(CountState) count$: Observable<number>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());

  }

}
