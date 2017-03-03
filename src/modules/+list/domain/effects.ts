import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
  loadListEffect$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_LOAD_START)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      return Observable.of(new DomainActions.list.ListLoadCompleteAction(results()));
    });

  @Effect()
  loadMoreListEffect$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_LOAD_MORE_START)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      return Observable.of(new DomainActions.list.ListLoadCompleteAction(results()));
    });

  @Effect()
  videoSelectedEffect$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_SELECT_VIDEO)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      return Observable.of(new DomainActions.list.ListGoToVideoDetailAction(action.payload.id.videoId));
    });

  @Effect()
  goToDetailVideoEffect$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_GO_TO_DETAIL_VIDEO)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      this.router.navigateByUrl('/detail/' + action.payload);
      return Observable.of({ 'type': 'LIST_GO_TO_DETAIL_VIDEO' });
    });

  constructor(
    private actions$: Actions,
    private listService: ListService,
    private router: Router
  ) {
    console.log('ListEffects');
  }
}
