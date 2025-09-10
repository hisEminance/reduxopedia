import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementMultiplier, decrementMultiplier } from "../../redux/slice/counterSlice";
import { useState } from 'react';
import CountButton from '../../CountButton';

function Counter() {
  const count = useSelector((state)=>state.counterStore.count)
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(10);
  
  return (
    <div
      className=" mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter : {count}</div>
      <div className="row">
        <div className=" p-4 col-12 col-md-6">
         <div className="border p-4">
           <h4 className="text-success pb-2">Basic counter</h4>
           <CountButton label="Add" className="btn-primary" onClick={() => dispatch(increment())}/>
           <CountButton label="Remove" className="btn-danger" onClick={() => dispatch(decrement())}/>
         </div>
        </div>
      </div>
      <div className="row">
        <div className=" p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Multiple counter</h4>
            <div className="row">
             <div className="col-4 p-1">
               <input
                type="number"
                className="form-control"
                value={multiplier}
                onChange={(e) => setMultiplier(Number(e.target.value))}
               />
              </div>
              <div className="col-4 p-1">
                <CountButton label="Add" className="btn-primary" onClick={() => dispatch(incrementMultiplier(multiplier))}/>
              </div>
              <div className="col-4 p-1">
                <CountButton label="Remove" className="btn-danger" onClick={() => dispatch(decrementMultiplier(multiplier))}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;