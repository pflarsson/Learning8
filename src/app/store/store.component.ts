import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState } from './store.state';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

   @Select(CountState) count$: Observable<number>;

  constructor(public store: Store) {}

  onClick() {
    this.store.dispatch(new Add());

  }

  ngOnInit() {
  }

}
