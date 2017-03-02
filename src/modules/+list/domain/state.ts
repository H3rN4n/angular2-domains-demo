import { State } from 'ngrx-domains';

State.list = {
  usersData: [{
    token: '',
    name: '',
    img: ''
  }],
  listHasData: false
};

declare module 'ngrx-domains' {
  export interface ListState {
    usersData: [{
      token: String,
      name: String,
      img: String
    }];
    listHasData: boolean;
  }

  interface State {
    list: ListState;
  }
}
