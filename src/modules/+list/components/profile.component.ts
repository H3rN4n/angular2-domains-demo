import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Model } from 'ngrx-domains';


@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    @Input() user: Model.UserData;

    get name() {
        return this.user.name;
    }

    get token() {
        return this.user.token;
    }

    get img() {
        return this.user.img;
    }
}