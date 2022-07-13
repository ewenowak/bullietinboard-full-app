import { combineReducers, applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
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
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;