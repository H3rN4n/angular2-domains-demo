export interface _UserData {
  name: string;
  img: string;
  token: string;
}

declare module 'ngrx-domains' {
  export namespace Model {
    export type UserData = _UserData;
  }
}


