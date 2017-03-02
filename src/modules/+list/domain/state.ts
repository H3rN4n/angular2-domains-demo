import { State } from 'ngrx-domains';

State.list = {
  usersData: [{}],
  listHasData: false
};

declare module 'ngrx-domains' {
  export interface ListState {
    usersData: [any];
    listHasData: boolean;
  }

  interface State {
    list: ListState;
  }
}
