import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { State } from 'ngrx-domains';
import { EffectsModule } from '@ngrx/effects';

import { LoginEffects } from './domain/effects';
//import { LoginService } from './login.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';

import './domain';


@NgModule({
    imports: [
        ReactiveFormsModule,
        LoginRoutingModule,
        EffectsModule.run(LoginEffects),
    ],
    providers: [
        //LoginService,
    ],
    declarations: [
        LoginComponent
    ]
})

export class LoginModule {
    constructor(store: Store<State>) { }
}
