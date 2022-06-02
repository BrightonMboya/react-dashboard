import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../data/dummy'
import { useStateContext } from '../Contexts/ContextProvider'

const ThemeSettings = () => {
  return (
    <div className='bg-half-transparent fixed w-screen top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400'>
        <div className='flex'>

        </div>

      </div>
      
    </div>
  )
}

export default ThemeSettings