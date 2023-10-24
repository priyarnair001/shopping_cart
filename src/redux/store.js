import {legacy_createStore as  createStore } from 'redux'; // Use the standard import
import reducers from './reducers/index'; // Import the combined (or single) reducer

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
