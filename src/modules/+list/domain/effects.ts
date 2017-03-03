import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Actions as DomainActions, State } from 'ngrx-domains';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { ActionTypes } from './actions';

import { ListService } from '../list.service';
import { results } from '../data';

@Injectable()
export class ListEffects {

  @Effect()
  loadListAction$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_LOAD_START)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      return Observable.of(new DomainActions.list.ListLoadCompleteAction(results()));
    });

  @Effect()
  loadMoreListAction$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_LOAD_MORE_START)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      return Observable.of(new DomainActions.list.ListLoadCompleteAction(results()));
    });

  constructor(
    private actions$: Actions,
    private listService: ListService
  ) {
    console.log('ListEffects');
  }
}
