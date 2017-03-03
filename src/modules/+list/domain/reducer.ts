import { Actions, ListState, State } from 'ngrx-domains';

function _addVideos(currentData, newestVideos) {
    const newData = Object.assign({}, currentData);
    newData.items = currentData.items.concat(newestVideos);
    return newData;
}

export function reducer(state: ListState = State.list, action: any): ListState {
  switch (action.constructor) {
    case Actions.list.ListLoadCompleteAction:
      if (state.usersData.items.length > 1) {
        return Object.assign({}, State.list, { listHasData: true, usersData: _addVideos(state.usersData, action.payload.items) });
      } else {
        return Object.assign({}, State.list, { listHasData: true, usersData: action.payload });
      }

    default:
      return state;
  }
}
