import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './reducers/cart';
import { favoriteReducer } from './reducers/favorite';
import { userReducer } from './reducers/user';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorite: favoriteReducer
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;