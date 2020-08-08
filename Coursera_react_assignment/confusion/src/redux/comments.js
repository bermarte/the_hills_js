import * as ActionTypes from './ActionTypes';

//used (dispatched) in MainComponent
export const Comments = (state = {
    errMess: null,
    comments: []
    }, action) => {
    //only the comment part of the reducer will make changes
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        //if the action passed to the reducer function is ADD_COMMENT
        case ActionTypes.ADD_COMMENT:
            //payload is an object containing the various parts of the comment
            var comment = action.payload;
            //later the comment.id will be generated from the server
            //for now it comes from the length of the state array
            //comment.id = state.comments.length; (done)
            //comment.date = new Date().toISOString(); (done)
            //concat does not change the state(immutability), instead
            //copy it and creates a new array
            //the view will be now able to show a new comment but it will not yet be persisting
            console.log("Comment: ", comment);
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
}