import { Actions, ListState, State } from 'ngrx-domains';

export function reducer(state: ListState = State.list, action: any): ListState {
  switch (action.constructor) {
    case Actions.list.ListLoadCompleteAction:
      console.log('reducer');
      if (state.usersData.length > 1) {
        return Object.assign({}, State.list, { listHasData: true, usersData: state.usersData.concat(action.payload) });
      } else {
        return Object.assign({}, State.list, { listHasData: true, usersData: action.payload });
      }

    default:
      return state;
  }
}
