import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//addComment will be used by postComment to push 
//the comment into the redux store
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

//action creator
//POST operation on the server
//it is a thunk
export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    //post the comment to the server
    //if you don't specify the HTTP verb, it will be set by default to GET
    //send data inside the body of the message
    
    //structure of the request method
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error '+ response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post comments ', error.message);
        alert('Your comment could not be posted\nError: '+error.message)});
}
/*
the last action creator will change only the comments part of the state
*/

export const fetchDishes = () => (dispatch) => {
    //this thunk is doing two dispatches
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            //gives back error or data
            if (response.ok) {
                //the response will be available to the next .then chain
                return response;
            }
            else {
                //error code is response.status
                //response.statusText is the error message
                var error = new Error('Error '+ response.status + ': '+ response.statusText);
                error.response = response;
                //throwing error so we can implement catch
                throw error;
            }
        },
        //implemented error handler
        //if you don't hear anything from the server
        //it will throw this error
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        //promise and response => response.json() is a callback function
        .then(response => response.json())
        //put dishes into the redux store
        .then(dishes => dispatch(addDishes(dishes)))
        //rejected promise
        .catch(error => dispatch(dishesFailed(error.message)));
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
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+ response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })

        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error '+ response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    
    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error '+ response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback = (
    firstname, lastname, telnum,
    email, agree, contactType, message) => (dispatch) => {
      
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            alert('else done');
            var error = new Error(`Error ${response.status} : ${response.statusTex}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .then(response => 
        alert(`Thank you for your feedback!\n ${JSON.stringify(response.payload, null, " ")}`))
    .catch(error => { console.log('Post feedback ', error.message);
        alert(`Your feedback could not be posted\nError: ${error.message}`)}); 

}

export const feedbackFailed = (errmess) => ({
    type: ActionTypes.FEEDBACK_FAILED,
    payload: errmess
});