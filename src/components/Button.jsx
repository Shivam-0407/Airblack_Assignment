import React from 'react'
import  './styles/Button.css'

const Button = ({label}) => {
  return (
    <div className="apply-now">
           <button>{label}</button>
        </div>
  )
}

export default Button