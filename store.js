/**
 * This is the main Redux store file.
 */

import mainReducer from "./reducers/MainReducer";
import { createStore } from 'redux';

const store = createStore(mainReducer);
export default store;