import React from 'react'
import { NavLink } from 'react-router-dom'

const EventTags = () => {

  // Filters for the events

  return (
    <div className='flex justify-between pt-10 text-white'>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-offBlack' : 'bg-accent'
      }`}>All</NavLink>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-offBlack' : 'bg-accent'
       }`}>Latest Events</NavLink>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-offBlack' : 'bg-accent'
      }`}>Location</NavLink>
       <NavLink className= {({isActive}) => `px-3 py-2 bg-offBlack rounded-full ${
        isActive ? 'bg-offBlack' : 'bg-accent'
      }`}>Date</NavLink>
    </div>
  )
}

export default EventTags