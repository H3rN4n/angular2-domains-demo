import { State } from 'ngrx-domains';

State.detail = {
  video: {}
};

declare module 'ngrx-domains' {
  export interface DetailState {
    video: any;
  }

  interface State {
    detail: DetailState;
  }
}
