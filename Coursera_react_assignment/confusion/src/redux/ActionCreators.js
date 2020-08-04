import * as ActionTypes from './ActionTypes';

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