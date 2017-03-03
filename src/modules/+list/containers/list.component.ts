import { Actions, Model, Queries, State } from 'ngrx-domains';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {
  public usersData$: Observable<[any]>;
  public listHasData$: Observable<boolean>;

  constructor(
    private store: Store<State>,
  ) {
    this.usersData$ = store.select(Queries.list.getUsersData);
    this.listHasData$ = store.select(Queries.list.getListStatus);
  }

  ngOnInit() { }

  onLoadItems() {
    this.store.dispatch(new Actions.list.ListLoadStartAction());
  }

  onLoadMoreItems() {
    this.store.dispatch(new Actions.list.ListLoadMoreStartAction());
  }

}
