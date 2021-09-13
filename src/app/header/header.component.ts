import { Guitar } from './../models/guitar.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getCart } from '../store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart$: Observable<Guitar[]>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.cart$ = this.store.pipe(select(getCart));
  }
}
