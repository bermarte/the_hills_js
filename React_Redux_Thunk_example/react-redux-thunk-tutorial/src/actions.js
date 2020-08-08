import { incrementCount } from './countService';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

//action creator

//to use thunk you use a function that returns a function
export const incrementCountAction = () => async(
    dispatch,
    getState
  ) => {
    const newCount = await incrementCount();
    console.log('newCount', newCount);
    //when it is done dipatch the action
    dispatch({
        type: INCREMENT_COUNT,
        payload: newCount
    })
}