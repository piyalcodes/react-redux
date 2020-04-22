import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector, connect  } from "react-redux";
import { incremenet, decrement  } from "./actions/actions";
 

function App({counterData, incr, decr}) {

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
    
count: {counter} 
 

<button onClick={() => dispatch(incremenet()) }>+</button>
<button onClick={() => dispatch(decrement()) }>-</button>


<br /><br /><br />

count: {counterData} 
 

<button onClick={() => incr() }>+</button>
<button onClick={() => decr() }>-</button>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counterData: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    incr: () => dispatch(incremenet()),
    decr: () => dispatch(decrement())
  }

}
export default connect(mapStateToProps, mapDispatchToProps )(App);
