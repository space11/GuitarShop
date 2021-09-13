import { ShopActions } from './../store/actions';
import { Guitar } from './../models/guitar.model';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent implements OnInit {
  @Input() guitar: Guitar;

  constructor(private store: Store<{ items: [], cart: []; }>) { }
  inCart: boolean = false;

  addToCart(guitar: Guitar) {
    this.store.dispatch(ShopActions.AddToCart({ guitar }));
    this.inCart = true;
  }

  removeFromCart(guitar: Guitar) {
    this.store.dispatch(ShopActions.RemoveFromCart({ guitar }));
  }

  ngOnInit(): void {
  }

}
