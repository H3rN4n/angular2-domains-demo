import { Action } from '@ngrx/store';
import { Actions } from 'ngrx-domains';

export const ActionTypes = {
  LOGIN_START: '[Login] Send the login request',
  LOGIN_COMPLETE: '[Login] Login Success',
  LOGIN_FAIL: '[Login] Login Fail',
  LOGOUT_START: '[Login] Logout',
  REMEMBER_ME: '[Login] Remember me action',
  FORGET_ME: '[Login] Forget me action'
};

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT_START;

  constructor() { }
}

export class LoginStartAction implements Action {
  type = ActionTypes.LOGIN_START;

  constructor(public payload: any) { }
}


export class LoginCompleteAction implements Action {
  type = ActionTypes.LOGIN_COMPLETE;

  constructor(public payload: any) {

  }
}

export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;

  constructor(errorMessage: string) { }
}

export class RememberMeAction implements Action {
  type = ActionTypes.REMEMBER_ME;

  constructor() { }
}

export class ForgetMeAction implements Action {
  type = ActionTypes.FORGET_ME;

  constructor() { }
}

Actions.login = {
  TYPES: ActionTypes,
  LoginStartAction,
  LoginCompleteAction,
  LoginFailAction,
  LogoutAction,
  RememberMeAction,
  ForgetMeAction
};

declare module 'ngrx-domains' {
  interface Actions {
    login: {
      TYPES: typeof ActionTypes,
      LoginStartAction: typeof LoginStartAction;
      LoginCompleteAction: typeof LoginCompleteAction;
      LoginFailAction: typeof LoginFailAction;
      LogoutAction: typeof LogoutAction;
      RememberMeAction: typeof RememberMeAction;
      ForgetMeAction: typeof ForgetMeAction;
    };
  }
}
