import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementCountAction } from './actions';
import './App.css';

function App({incrementMyCount, myCount}) {
  //const [count, setCount] = useState(2);
  //console.log(dispatch);
  return (
    <div className="App">
      <button onClick={
        //instead of dispatching the object we are using a factory function
        // dispatch(incrementCountAction())
         incrementMyCount}>
        {myCount}
      </button>
    </div>
  );
}

//map redux store to props
//count from initialState in store.js
const mapStateToProps = (state) => ({
  myCount: state.count
});

const mapDispatchToProps = {
  incrementMyCount: incrementCountAction

}
//mapStateToProps, by using connect you are able to call dispatch
//mapDispatchToProps if you use action creator, you can map them to props (see actions.js)
export default connect(mapStateToProps, mapDispatchToProps) (App);
