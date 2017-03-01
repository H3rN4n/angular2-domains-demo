import { Queries } from 'ngrx-domains';

export interface VIEWQueries {}

/**
 * Views are inter-domain queries the involve at least 2 domains.
 * Views are slightly more complex, transforming at least 2 or domains into a new (virtual) domain.
 * Views will usually mimic operations like SQL Joins, virtual/calculated properties etc...
 */
Queries.VIEWS = {
  /**
   * Some selector functions create joins across parts of state. This selector
   * composes the search result IDs to return an array of books in the store.
   */
};


declare module 'ngrx-domains' {
  interface Queries {
    VIEWS: VIEWQueries;
  }
}
