import React from 'react'
import Chip from '../components/Chip'

const EventCard = () => {
  return (
    <div className='py-8 lg:py-0'>
        <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-md h-[28rem] w-[80rem] md:w-[18rem] md:h-[20rem] lg:w-[18.5rem] lg:h-[24rem] object-cover bg-fallBack'/>
        <div className="flex pt-3 pl-4">
            <Chip/>
            <Chip/>
        </div>
        <p className='text-lg  pl-4 pt-3 text-brandBlack font-bold font-DM'>Title</p>
        <p className='text-lg pl-4 text-fadedAccent font-DM'>Date</p>
    </div>
  )
}

export default EventCard