import { Actions, ListState, State } from 'ngrx-domains';

export function reducer(state: ListState = State.list, action: any): ListState {
  switch (action.constructor) {
    case Actions.list.ListLoadCompleteAction:
      return Object.assign({}, State.list, { listHasData: true, usersData: action.payload });
    default:
      return state;
  }
}
