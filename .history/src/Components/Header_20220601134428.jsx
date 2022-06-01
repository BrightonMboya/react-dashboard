import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mb-10'>
        <p className='text-gray-400'>
            {category}
        </p>
    </div>
  )
}

export default Header