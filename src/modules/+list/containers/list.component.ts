import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Actions, State, Queries, Model } from 'ngrx-domains';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {
  public usersData$: Observable<[Model.UserData]>;
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

}
