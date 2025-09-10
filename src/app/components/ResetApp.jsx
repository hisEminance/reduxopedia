import React from "react";
import { useDispatch } from "react-redux";
import { resetDestination } from "../../redux/slice/destinationSlice";
import CountButton from "../../CountButton";

function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterAndDestination = () => {
    dispatch(resetDestination());
  };

  return (
    <div className="text-center">
      <CountButton label="Reset App" className="btn-warning" onClick={resetCounterAndDestination}/>
    </div>
  );
}

export default ResetApp;