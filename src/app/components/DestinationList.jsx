import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { destinationClicked } from "../../redux/store";
import CountButton from '../../CountButton';

function DestinationList() {
  const destinationList = useSelector((state)=> state.destinationStore.destinations);
  const dispatch = useDispatch();

  return destinationList.map((destination, index) => {
    return (
      <div
        className="text-center text-white row"
        style={{ borderBottom: "1px solid #333" }}
        key={index}
      >
        <div className="col-8 col-md-3 offset-md-3 pt-2">
          {destination.name}
        </div>
        <div className="col-4 col-md-2">
          <CountButton label="Details" className="btn-success"  onClick={() => dispatch(destinationClicked(destination))}/>
        </div>
      </div>
    );
  });
}

export default DestinationList;