import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//used (dispatched) in MainComponent
export const Comments = (state = COMMENTS, action) => {
    //only the comment part of the reducer will make changes
    switch(action.type) {
        //if the action passed to the reducer function is ADD_COMMENT
        case ActionTypes.ADD_COMMENT:
            //payload is an object containing the various parts of the comment
            var comment = action.payload;
            //later the comment.id will be generated from the server
            //for now it comes from the length of the state array
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //concat does not change the state(immutability), instead
            //copy it and creates a new array
            //the view will be now able to show a new comment but it will not yet be persisting
            console.log("Comment: ", comment);
            return state.concat(comment);
        default:
            return state;
    }
}