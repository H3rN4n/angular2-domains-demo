import { createDomain } from 'ngrx-domains';
import './state';

import { reducer } from './reducer';

createDomain('app', reducer);

export { AppEffects } from './effects';