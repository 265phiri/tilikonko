import React from 'react'

const PrimaryCTA = (props) => {
  return (
    <button  className='bg-brandBlack text-sm md:text-md text-white rounded-md px-6 py-2 mr-4 md:px-8 md:py-3 md:mr-4 hover:bg-accent duration-300'>
        {props.name} 
    </button>
  )
}

export default PrimaryCTA