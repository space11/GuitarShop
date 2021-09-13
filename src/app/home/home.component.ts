import { ShopActions } from './../store/actions';
import { Guitar } from './../models/guitar.model';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannersIndex: number[] = [1, 2, 3, 4];
  items: Guitar[];
  constructor(private store: Store<any>) {
    store.pipe(select('shop')).subscribe((state) => (this.items = state.items));
  }

  ngOnInit(): void {
    this.store.dispatch(ShopActions.LoadItems());
  }

}
