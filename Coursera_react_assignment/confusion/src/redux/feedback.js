import * as ActionTypes from './ActionTypes';

//used (dispatched) in MainComponent
export const Feedback = (state = {
    errMess: null,
    feedbacks: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.FEEDBACK_FAILED:
                return {...state, errMess: action.payload, feedbacks: []};
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            console.log("Feedback: ", feedback);
            return {...state, feedbacks: state.feedbacks.concat(feedback)};
        default:
            return state;
    }
}