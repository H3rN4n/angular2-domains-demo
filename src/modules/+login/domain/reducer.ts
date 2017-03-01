import { Actions, LoginState, State } from 'ngrx-domains';

export function reducer(state: LoginState = State.login, action: any): LoginState {
  switch (action.constructor) {
    case Actions.login.LogoutAction:
      return Object.assign({}, State.login, { token: '' });
    case Actions.login.LoginCompleteAction:
      return Object.assign({}, State.login, { isModalOpen: false, token: action.payload });
    case Actions.login.LoginFailAction:
      return Object.assign({}, State.login, { isModalOpen: true, errorMessage: action.payload });
    case Actions.login.RememberMeAction:
      return Object.assign({}, State.login, { rememberMe: true});
    case Actions.login.ForgetMeAction:
      return Object.assign({}, State.login, { rememberMe: false});
    default:
      return state;
  }
}
