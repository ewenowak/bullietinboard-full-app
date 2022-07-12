import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const subreducers = {
    posts: postsReducer,
    users: usersReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;