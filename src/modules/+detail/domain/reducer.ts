import { Actions, DetailState, State } from 'ngrx-domains';

export function reducer(state: DetailState = State.detail, action: any): DetailState {
  switch (action.constructor) {
    default:
      return state;
  }
}
