import { Observable } from 'rxjs';
import { ShopActions } from './../store/actions';
import { Guitar } from './../models/guitar.model';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getItems } from '../store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannersIndex: number[] = [1, 2, 3, 4];
  items$: Observable<Guitar[]>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(getItems));
    this.store.dispatch(ShopActions.LoadItems());
  }
}
