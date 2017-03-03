import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Model } from 'ngrx-domains';


@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})
export class CardComponent {
    @Input() data: any;
    @Output() select = new EventEmitter<any>();

    get title() {
        return this.data.snippet.title;
    }

    get description() {
        return this.data.snippet.description;
    }

    get img() {
        return this.data.snippet.thumbnails.high.url;
    }

    get url() {
        return 'https://www.youtube.com/watch?v=' + this.data.id.videoId;
    }
}