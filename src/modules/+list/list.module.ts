import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { State, Actions } from 'ngrx-domains';
import { EffectsModule } from '@ngrx/effects';

import { ListEffects } from './domain/effects';
import { ListService } from './list.service';
import 'rxjs/add/operator/first';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './containers/list.component';
import { ProfileComponent } from './components/profile.component';

import './domain';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ListRoutingModule,
        EffectsModule.run(ListEffects),
    ],
    providers: [
        ListService
    ],
    declarations: [
        ListComponent,
        ProfileComponent
    ]
})

export class ListModule {
    constructor(store: Store<State>) {
        store
            .first()
            .subscribe(state => store.dispatch(new Actions.list.InitListState()));
    }
}
