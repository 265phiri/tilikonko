import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const SecondaryCTA = () => {
  return (
    <button  className='flex justify-start  text-sm md:text-md justify-beteen text-brandBlack rounded-md px-10 py-2 border-2 border-background hover:border-accent hover:text-accent hover:border-2 duration-300'>Check out events <BsArrowRight size={20} className='pl-2 hidden md:flex'/>
    </button>
  )
}

export default SecondaryCTA