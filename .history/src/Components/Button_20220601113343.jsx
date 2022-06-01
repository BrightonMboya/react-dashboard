import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <div>
      <button type='button' 
      style={{backgroundColor: bgColor, color, borderRadius}}
      
      ></button>
    </div>
  )
}

export default Button