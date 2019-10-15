import { combineReducers } from 'redux';

import content from './content';
import source from './source';

export default combineReducers({ content, source });