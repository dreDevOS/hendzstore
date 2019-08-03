import {IAppState} from "./../interfaces/app-state";
import { ProductModel } from '../models/product.model';
import {UPDATE_CART, ADD_TO_CART} from './actions/action';



    


export const INITIAL_STATE : IAppState = 
{
    products : new Array<ProductModel>()
};

export function rootReducer (state: IAppState, action: AnyAction) :
 IAppState 
 {
     switch(action.type) 
     {
         case ADD_TO_CART:
             return Object.assign({}, state, action.payload);


         case UPDATE_CART:
             return Object.assign({}, state, action.payload);
     }
     return state;
 }