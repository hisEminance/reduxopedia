import React from 'react'

function CountButton({className, onClick, label}) {
  return (
     <button className={`btn ${className} form-control m-1`} onClick={onClick}>{label}</button>
  )
}

export default CountButton;