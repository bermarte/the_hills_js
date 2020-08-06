import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
//import { actionTypes } from 'react-redux-form';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
         dishId: dishId,
         rating: rating,
         author: author,
         comment: comment
    }
});
/*
this action creator will change only the comments part of the state
*/

export const fetchDishes = () => (dispatch) => {
    //this thunk is doing two dispatches
    dispatch(dishesLoading(true));

    setTimeout(() =>{
        //push the dishes into the state
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    //returns an action that will be sent to the reducer
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    //this is a function that returns an action
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});