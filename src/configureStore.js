// External dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Local dependencies
import crime_checker from './reducers';


const configureStore = () => {
  let middlewares = [thunk];
  return createStore(
    crime_checker,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;