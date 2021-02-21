/**
 * This is the main Redux store file.
 */

import mainReducer from "./reducers/MainReducer";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(mainReducer, composeWithDevTools());
export default store;