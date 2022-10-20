import React, { useContext } from 'react'
import { countContext } from '../Config/CountContext'
import {useDispatch} from 'react-redux'
import { addCount } from '../Redux/Actions/CounterAction';

function Count() {

    const {count,setCount}=useContext(countContext);
    
    const dispatch=useDispatch();
    function add()
    {
       // setCount(count+1);
       dispatch(addCount())


    }
  return (
    <div>

        <button className='btn btn-primary m-5' onClick={add}> add</button>
    </div>
  )
}

export default Count