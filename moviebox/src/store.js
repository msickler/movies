import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import movies from './reducers/movies';
import moviesForm from './reducers/moviesForm'

const reducers = combineReducers({
  movies, moviesForm
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
