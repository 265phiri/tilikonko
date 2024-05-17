import React from 'react'

const Useravatars = (props) => {
  return (
   <div className="flex">
    <img src="https://images.pexels.com/photos/3358299/pexels-photo-3358299.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-10 h-10 rounded-full border-2 border-white bg-fallBack object-cover'/>
    <img src="https://images.pexels.com/photos/948199/pexels-photo-948199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-10 h-10 rounded-full border-2 border-white bg-fallBack -ml-3 object-cover'/>
    <img src="https://images.pexels.com/photos/1267350/pexels-photo-1267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-10 h-10 rounded-full border-2 border-white bg-fallBack -ml-3 object-cover'/>
   </div>
  )
}

export default Useravatars