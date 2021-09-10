import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Guitar } from '../models/guitar.model';
import { GuitarsService } from './../services/guitars.service';
import * as ShopActions from './actions';

@Injectable()
export class ShopEffect {
  constructor(
    private actions$: Actions,
    private guitarService: GuitarsService) { }

  loadGuitars$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.LoadItems),
      mergeMap(() =>
        this.guitarService.getAll().pipe(
          map((guitars: Guitar[]) => ShopActions.LoadItemsSuccess({ payload: guitars })),
          catchError(error => of(ShopActions.LoadItemsFailure({ error }))))
      ),
    );
  });
}
