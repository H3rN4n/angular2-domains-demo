import { Action } from '@ngrx/store';
import { Actions, Model } from 'ngrx-domains';

//import { type } from '../../../util';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  SHOW_NOTIFICATION: '[APP] Show notification message',
  OPEN_UPLOAD_OVERLAY: '[APP] Open Upload Overlay',
  CLOSE_UPLOAD_OVERLAY: '[APP] Close Upload Overlay'
};


export class ShowNotificationAction implements Action {
  type = ActionTypes.SHOW_NOTIFICATION;

  constructor(public payload: any) { }
}

export class OpenUploadOverlay implements Action {
  type = ActionTypes.OPEN_UPLOAD_OVERLAY;
}

export class CloseUploadOverlay implements Action {
  type = ActionTypes.CLOSE_UPLOAD_OVERLAY;

  constructor(public payload: any) { }
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

Actions.app = {
  TYPES: ActionTypes,
  ShowNotificationAction,
  OpenUploadOverlay,
  CloseUploadOverlay,
};

declare module 'ngrx-domains' {
  interface Actions {
    app: {
      TYPES: typeof ActionTypes;
      ShowNotificationAction: typeof ShowNotificationAction;
      OpenUploadOverlay: typeof OpenUploadOverlay;
      CloseUploadOverlay: typeof CloseUploadOverlay;
    };
  }
}
