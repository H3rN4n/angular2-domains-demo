import { Action } from '@ngrx/store';
import { Actions } from 'ngrx-domains';

export const ActionTypes = {
  LIST_INIT: '[List] Init',
  LIST_LOAD_START: '[List] Start load items request',
  LIST_LOAD_COMPLETE: '[List] Complete load items request',
};


export class InitListState implements Action {
  type = ActionTypes.LIST_INIT;

  constructor() { }
}

export class ListLoadStartAction implements Action {
  type = ActionTypes.LIST_LOAD_START;

  constructor() { }
}


export class ListLoadCompleteAction implements Action {
  type = ActionTypes.LIST_LOAD_COMPLETE;

  constructor(public payload: any) {

  }
}

Actions.list = {
  TYPES: ActionTypes,
  InitListState,
  ListLoadStartAction,
  ListLoadCompleteAction
};

declare module 'ngrx-domains' {
  interface Actions {
    list: {
      TYPES: typeof ActionTypes,
      InitListState: typeof InitListState;
      ListLoadStartAction: typeof ListLoadStartAction;
      ListLoadCompleteAction: typeof ListLoadCompleteAction;
    };
  }
}
