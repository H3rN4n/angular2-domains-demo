import { State } from 'ngrx-domains';

State.login = {
  form: {},
  token: '',
  errorMessage: '',
  isModalOpen: false,
  rememberMe: false
};

declare module 'ngrx-domains' {
  export interface LoginState {
    form: any;
    token: string;
    errorMessage: string;
    isModalOpen: boolean;
    rememberMe: boolean;
  }

  interface State {
    login: LoginState;
  }
}
