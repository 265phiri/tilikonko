import React from 'react'
import PrimaryCTA from '../components/PrimaryCTA'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <main className='pt-20 pb-20 grid xl:grid-cols-2 bg-background mx-auto xl:px-12'>
      <section className='px-12'>
        <div className="text-center pt-20 pb-10 xl:text-left">
          <p className="font-bold text-brandBlack text-md xl:text-xl">Advertise with Tilikonko!</p>
          <p className="font-EricaOne text-accent text-3xl xl:text-5xl">GIVE US A SHOUT</p>
        </div>
        <div className="hidden xl:block mt-2 text-left text-brandBlack font-DM text-md mx-auto">
            <p>For advertising contact us via email or alternatively on our facebook page
            Registered Konko users can log in, post and edit events directly on our platform.
            We look forward to connecting and catering for your advertisement needs. </p>

            <div className="pt-10 mx-auto pb-6">
              <NavLink to={"/Contact/Signin"}><PrimaryCTA name="Konko User Sign In" /></NavLink>
            </div>

            <div className="flex w-28 justify-between">
              <div className="cursor-pointer hover:border-accent ease-in-out duration-300 p-4 border-[1px] border-slate-300 rounded-full"><FaFacebookF/></div>
              <div className="cursor-pointer hover:border-accent ease-in-out duration-300 p-4 border-[1px] border-slate-300 rounded-full"><AiOutlineMail/></div>
          </div>
          </div>
      
      </section>
    
      <section className=' py-20'>
        <div className='relative md:w-96 md:mx-auto xl:scale-125 xl:mt-20'>
          <img src="src/assets/Dome 3.png" alt=""className='absolute scale-50 -bottom-20 right-10 rotate-[45deg]'/>
          <img src="src/assets/TorusHalf3.png" alt=""className='absolute scale-75 right-0 -top-20'/>
          <img src="src/assets/TorusHalf4.png" alt=""className='absolute scale-75 rotate-[30deg] -bottom-32 -left-4'/>
          <img src="" alt=""/>
          <div className="p-2 bg-fadedAccent h-fit w-fit rounded-full mx-auto">
            <img src="https://images.pexels.com/photos/11744112/pexels-photo-11744112.jpeg?auto=compress&cs=tinysrgb&w=600" className="bg-fallBack object-cover h-80 w-56 rounded-full mx-auto"/>
          </div>

        </div>
          <div className="mt-28 text-center px-4 text-brandBlack font-DM text-md md:w-[40rem] mx-auto xl:hidden">
            <p>For advertising contact us via email or alternatively on our facebook page
            Registered Konko users can log in, post and edit events directly on our platform.
            We look forward to connecting and catering for your advertisement needs. </p>

            <div className="pt-10 mx-auto  pb-6">
              <NavLink to={"/Contact/signin"}><PrimaryCTA name="Konko User Sign In" /></NavLink>
            </div>

            <div className="flex w-28 justify-between mx-auto">
              <div className="p-4 border-[1px] border-slate-300 rounded-full"><FaFacebookF/></div>
              <div className="p-4 border-[1px] border-slate-300 rounded-full"><AiOutlineMail/></div>
          </div>
          </div>
      </section>
    </main>
  )
}

export default Contact