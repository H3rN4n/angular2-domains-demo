import { State } from 'ngrx-domains';

State.list = {
  usersData: {
    items: [{}]
  },
  videoSelected: {},
  listHasData: false
};

declare module 'ngrx-domains' {
  export interface ListState {
    usersData: {
      items: [any]
    };
    videoSelected: any;
    listHasData: boolean;
  }

  interface State {
    list: ListState;
  }
}
