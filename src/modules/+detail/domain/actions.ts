import { Action } from '@ngrx/store';
import { Actions } from 'ngrx-domains';

export const ActionTypes = {
  DETAIL_INIT: '[Detail] Init',
};


export class InitDetailState implements Action {
  type = ActionTypes.DETAIL_INIT;

  constructor() { }
}


Actions.detail = {
  TYPES: ActionTypes,
  InitDetailState
};

declare module 'ngrx-domains' {
  interface Actions {
    detail: {
      TYPES: typeof ActionTypes,
      InitDetailState: typeof InitDetailState;
    };
  }
}
