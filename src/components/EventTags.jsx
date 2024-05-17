import React from 'react'
import { NavLink } from 'react-router-dom'

const EventTags = () => {
  return (
    <div className='flex justify-between pt-10 text-white'>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-accent' : 'bg-offBlack'
       }`}>All</NavLink>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-accent' : 'bg-offBlack'
       }`}>Latest Events</NavLink>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-accent' : 'bg-offBlack'
       }`}>Location</NavLink>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-accent' : 'bg-offBlack'
       }`}>Date</NavLink>
    </div>
  )
}

export default EventTags