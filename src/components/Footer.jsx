import React from 'react'
import FooterLink from './FooterLink'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='font-DM bg-white h-[20rem] w-full'>

      <section className="text-center text-sm px-4">
        <p className='font-bold text-3xl antialiased  pt-12 pb-4'>Tilikonko<span className='text-accent'>!</span> We're here.</p>
        <p>Here to keep you in the loop with the latest shows and festivals.</p>
        <p>A Nyquist company product</p>
      </section>

      <section className="grid grid-cols-3 gap-3 justify-center mx-auto py-10 max-w-72 sm:flex">
          <NavLink className="px-2" to={"/"}><FooterLink  name={"Home"}/></NavLink>
          <NavLink className="px-2" to={"/about"}><FooterLink  name={"About"}/></NavLink>
          <NavLink className="px-2" to={"/events"}><FooterLink  name={"Events"}/></NavLink>
          <NavLink className="px-2" to={"/contact"}><FooterLink  name={"Contact"}/></NavLink>
      </section>

      <section className="border-t-2 border-slate-200 max-w-[60rem] mx-auto pt-4 md:flex md:items-center md:justify-around md:px-20">
        <img src="tilikonko mobile.svg" alt="" className='w-20 h-20 mx-auto md:mx-auto'/>
        <p className='text-center mb-8 md:mb-0'>&copy; Nyquix Company. All rights reserved</p>

        <div className="flex w-28 justify-between mx-auto">
          <div className="p-4 border-[1px] border-slate-300 rounded-full"><FaFacebookF/></div>
          <div className="p-4 border-[1px] border-slate-300 rounded-full"><AiOutlineMail/></div>
        </div>

      </section>

    </footer>
  )
}

export default Footer