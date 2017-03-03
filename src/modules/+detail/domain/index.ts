import { createDomain } from 'ngrx-domains';

import './state';
import './actions';
import './queries';

import { reducer } from './reducer';

createDomain('detail', reducer);

export { DetailEffects } from './effects';
