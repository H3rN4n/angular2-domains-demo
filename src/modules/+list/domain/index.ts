import { createDomain } from 'ngrx-domains';

import './state';
import './actions';
import './queries';

import { reducer } from './reducer';

createDomain('list', reducer);

export { ListEffects } from './effects';
