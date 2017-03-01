import { State } from 'ngrx-domains';

State.core = {
};

declare module 'ngrx-domains' {
  export interface CoreState {
  }

  interface State {
    core: CoreState;
  }
}
