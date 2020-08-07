import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

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

    return fetch(baseUrl + 'dishes')
        //promise and response => response.json() is a callback function
        .then(response => response.json())
        //put dishes into the redux store
        .then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    //this is a function that returns an action
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    //this is a function that returns an action
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});