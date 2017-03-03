import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { State, Actions } from 'ngrx-domains';
import { EffectsModule } from '@ngrx/effects';

import { DetailEffects } from './domain/effects';
import 'rxjs/add/operator/first';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './containers/detail.component';

import './domain';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DetailRoutingModule,
        EffectsModule.run(DetailEffects),
    ],
    declarations: [
        DetailComponent
    ]
})

export class DetailModule {
    constructor(store: Store<State>) {
        store
            .first()
            .subscribe(state => store.dispatch(new Actions.detail.InitDetailState()));
    }
}
