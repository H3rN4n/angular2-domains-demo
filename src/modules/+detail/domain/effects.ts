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

@Injectable()
export class DetailEffects {

  constructor(
    private actions$: Actions
  ) {
    console.log('DetailEffects');
  }
}
