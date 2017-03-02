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

const usersData = [{
  token: 'token',
  name: 'Hernán 1',
  img: 'https://pbs.twimg.com/profile_images/3123296673/f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg'
},
{
  token: 'token',
  name: 'Hernán 2',
  img: 'https://pbs.twimg.com/profile_images/3123296673/f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg'
},
{
  token: 'token',
  name: 'Hernán 3',
  img: 'https://pbs.twimg.com/profile_images/3123296673/f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg'
},
{
  token: 'token',
  name: 'Hernán 4',
  img: 'https://pbs.twimg.com/profile_images/3123296673/f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg'
}];

@Injectable()
export class ListEffects {
  constructor(
    private actions$: Actions,
    private listService: ListService
  ) {
    console.log('ListEffects');
  }

  @Effect()
  loadListAction$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_LOAD_START)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      // return this.listService.loadItems().first()
      //   .map(data => new DomainActions.list.ListLoadCompleteAction(data))
      return Observable.of(new DomainActions.list.ListLoadCompleteAction(usersData));
    });

  @Effect()
  loadMoreListAction$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LIST_LOAD_MORE_START)
    .map((action) => {
      return action;
    })
    .switchMap(action => {
      // return this.listService.loadItems().first()
      //   .map(data => new DomainActions.list.ListLoadCompleteAction(data))
      return Observable.of(new DomainActions.list.ListLoadCompleteAction(usersData));
    });


}
