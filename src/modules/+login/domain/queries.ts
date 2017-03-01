import { combineRootFactory, LoginState, Query, Queries, Root } from 'ngrx-domains';

const fromRoot = combineRootFactory<LoginState>('login');

const getFormData = fromRoot(state => state.form);
const getToken = fromRoot(state => state.token);
const getError = fromRoot(state => state.errorMessage);
const getModalStatus = fromRoot(state => state.isModalOpen);
const getRememberMe = fromRoot(state => state.rememberMe);

export interface LoginQueries {
  getFormData: Query<any>;
  getToken: Query<any>;
  getError: Query<any>;
  getModalStatus: Query<any>;
  getRememberMe: Query<any>;
}

Queries.login = {
  getFormData,
  getToken,
  getError,
  getModalStatus,
  getRememberMe
};

declare module 'ngrx-domains' {
  interface Root {
    login: Query<LoginState>;
  }
  interface Queries {
    login: LoginQueries;
  }
}
