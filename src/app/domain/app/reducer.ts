import { CoreState, State } from 'ngrx-domains';


/*=
 * The ngrx example-app originally uses a class for every action.
 * The classes does not come with a static property representing the token for the action (type),
 * the example-app uses an exported object (ActionTypes) to export the types.
 * Since ngrx-domains does not provide a way to export the tokens in the global api they can only be
 * access directly (import { ActionTypes } from './actions').
 * Direct import will work fine but when we want to import action types from a different domain we
 * need to import it directly which couples both domains together.
 *
 * There's no problem with coupling if this is by design, but if not we can bypass it.
 * To minimize changes to the original app I have left the class based actions in tact and used
 * direct reference comparision to find the dispatched action.
 *
 */


export function reducer(state: CoreState = State.core, action: any): CoreState {
  switch (action.constructor) {
    default: {
      return state;
    }
  }
}
