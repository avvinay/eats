import {combineReducers} from 'redux';

import CartReducer from './Cart/reducer';

const rootReducer = combineReducers({
    cart: CartReducer
});

export default rootReducer;


