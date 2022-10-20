import {createStore} from 'redux';
// import { counterReducer } from './Reducers/CounterReducer';
import { addToCartReducer } from './Reducers/ToCartReducer';



export const  store=createStore(addToCartReducer);

