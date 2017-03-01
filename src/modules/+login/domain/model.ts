export interface _Login {
    email: string;
    password: string;
    rememberMe: boolean;
}

declare module 'ngrx-domains' {
  export namespace Model {
    export type Login = _Login;
  }
}


