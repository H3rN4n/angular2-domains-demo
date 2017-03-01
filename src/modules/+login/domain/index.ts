import { createDomain } from 'ngrx-domains';

import './state';
import './actions';
import './queries';

import { reducer } from './reducer';

createDomain('login', reducer);

export { LoginEffects } from './effects';
