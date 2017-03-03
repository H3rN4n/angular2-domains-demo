import { Actions, Model, Queries, State } from 'ngrx-domains';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent implements OnInit {
  public videoUrl: string;

  constructor(
    private store: Store<State>,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const videoId = params['id'];
      this.videoUrl = 'https://www.youtube.com/embed/' + videoId;
    });
  }

}
