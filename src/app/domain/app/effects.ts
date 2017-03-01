import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ActionTypes } from './actions';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
  ) { }

}
