import { createSelector } from 'reselect';
import { combineRootFactory, ListState, Query, Queries, Root } from 'ngrx-domains';

const fromRoot = combineRootFactory<ListState>('list');

const getUsersData = fromRoot(state => state.usersData);
const getListStatus = fromRoot(state => state.listHasData);

export interface ListQueries {
  getUsersData: Query<any>;
  getListStatus: Query<any>;
}

Queries.list = {
  getUsersData,
  getListStatus
};

declare module 'ngrx-domains' {
  interface Root {
    list: Query<ListState>;
  }
  interface Queries {
    list: ListQueries;
  }
}
