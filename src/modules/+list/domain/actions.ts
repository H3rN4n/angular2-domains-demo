import { Action } from '@ngrx/store';
import { Actions } from 'ngrx-domains';

export const ActionTypes = {
  LIST_INIT: '[List] Init',
  LIST_LOAD_START: '[List] Start load items request',
  LIST_LOAD_MORE_START: '[List] Start load more items request',
  LIST_LOAD_COMPLETE: '[List] Complete load items request',
  LIST_SELECT_VIDEO: '[Detail] Set video selected',
  LIST_GO_TO_DETAIL_VIDEO: '[Detail] Go to detail video page',
};


export class InitListState implements Action {
  type = ActionTypes.LIST_INIT;

  constructor() { }
}

export class ListLoadStartAction implements Action {
  type = ActionTypes.LIST_LOAD_START;

  constructor() { }
}

export class ListLoadMoreStartAction implements Action {
  type = ActionTypes.LIST_LOAD_MORE_START;

  constructor() { }
}


export class ListLoadCompleteAction implements Action {
  type = ActionTypes.LIST_LOAD_COMPLETE;

  constructor(public payload: any) {

  }
}

export class ListSetSelectedVideoAction implements Action {
  type = ActionTypes.LIST_SELECT_VIDEO;

  constructor(public payload: any) {

  }
}

export class ListGoToVideoDetailAction implements Action {
  type = ActionTypes.LIST_GO_TO_DETAIL_VIDEO;

  constructor(public payload: any) {

  }
}

Actions.list = {
  TYPES: ActionTypes,
  InitListState,
  ListLoadStartAction,
  ListLoadMoreStartAction,
  ListLoadCompleteAction,
  ListSetSelectedVideoAction,
  ListGoToVideoDetailAction
};

declare module 'ngrx-domains' {
  interface Actions {
    list: {
      TYPES: typeof ActionTypes,
      InitListState: typeof InitListState;
      ListLoadStartAction: typeof ListLoadStartAction;
      ListLoadMoreStartAction: typeof ListLoadMoreStartAction;
      ListLoadCompleteAction: typeof ListLoadCompleteAction;
      ListSetSelectedVideoAction: typeof ListSetSelectedVideoAction;
      ListGoToVideoDetailAction: typeof ListGoToVideoDetailAction;
    };
  }
}
