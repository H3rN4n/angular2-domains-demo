import { State } from 'ngrx-domains';

State.list = {
  usersData: {
    items: [{}]
  },
  listHasData: false
};

declare module 'ngrx-domains' {
  export interface ListState {
    usersData: {
      items: [any]
    };
    listHasData: boolean;
  }

  interface State {
    list: ListState;
  }
}
