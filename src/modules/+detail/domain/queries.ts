import { createSelector } from 'reselect';
import { combineRootFactory, DetailState, Query, Queries, Root } from 'ngrx-domains';

const fromRoot = combineRootFactory<DetailState>('detail');

const getVideoData = fromRoot(state => state.video);

export interface DetailQueries {
  getVideoData: Query<any>;
}

Queries.detail = {
  getVideoData,
};

declare module 'ngrx-domains' {
  interface Root {
    detail: Query<DetailState>;
  }
  interface Queries {
    detail: DetailQueries;
  }
}
