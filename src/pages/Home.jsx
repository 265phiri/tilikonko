import React from 'react'
import Useravatars from '../components/Useravatars'
import PrimaryCTA from '../components/PrimaryCTA'
import SecondaryCTA from '../components/SecondaryCTA'
import EventCard from '../components/EventCard'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <main className='bg-background mx-auto w-full pt-12'>

      {/* Hero section */}
      <section className=' px-2 lg:px-0 pt-[5rem] text-center font-DM font-medium'>

        <span className='text-accent font-medium'>
          kulikonseko tili konko!
        </span>
        <h1 className='font-bold text-4xl lg:text-7xl text-brandBlack -mb-3'>
          Find the latest and
        </h1>
        <h1  className=' p-2 text-4xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]'>
          greatest events
        </h1>
        <p className='font-bold  text-lg  w-72 lg:text-xl lg:w-80 mx-auto pt-4 text-brandBlack'>
          The hub for event-goers, artists and organisers in Malawi
        </p>
        <div className='pt-3 lg:flex w-fit mx-auto items-center text-brandBlack'>
          <p className='pr-4'>
          Join other Konko users and advertise with us.
          </p>
          <div className=" pt-3 lg:pt-0 flex justify-center">
            < Useravatars avatar = {"https://images.pexels.com/photos/12128367/pexels-photo-12128367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/12128367/pexels-photo-12128367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
          </div>
        </div>

        <div className="w-fit h-28 grid lg:h-fit lg:flex lg:w-fit mx-auto mt-8">
          <NavLink to={"Events"}><PrimaryCTA name={"Live events"}/></NavLink>
         <NavLink to={"Events"}><SecondaryCTA/></NavLink>
        </div>
        
      </section>

    {/* Lower Hero section graphics */}
      <section className=' relative mt-20 pb-40 max-w-[80rem] mx-auto '>
        <img src="images/Rock.png" alt="" className='scale-0 lg:scale-100 absolute lg:absolute -top-20 lg:left-72'/>
        <img src="images/Rock2.png" alt="" className='absolute -top-10 lg:right-20 right-0 scale-75 md:scale-100'/>
        <img src="images/Torus.png" alt="" className='absolute top-[24rem] md:right-80 md:scale-110 scale-75 right-10'/>
        <img src="images/Cone3.png" alt="" className='absolute top-[10rem] lg:left-56 lg:scale-100 scale-75 left-0'/>
        <img src="images/Hollow cube.png" alt="" className='scale-0 lg:scale-100 absolute lg:blobk lg:absolute top-[35rem] left-56'/>
      
        <div className="mx-auto p-2 lg:p-3 lg:h-90 bg-gradient-to-tr from-zinc-800 to-zinc-900 h-fit w-fit rounded-3xl">
        <img src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='mx-auto rounded-2xl object-cover w-[14rem] h-[28rem] md:w-[40rem] lg:w-[56rem] lg:h-[32rem]'/>
        </div>

      </section >


      {/* See what's Hot */}

      <section className='max-w-[96rem] mx-auto'>
        <div className=" px-0 lg:px-16 ">
          <h2 className='font-DM text-brandBlack  text-3xl w-fit mx-auto lg:mx-0 md:text-5xl font-bold pb-5'>See what's <span className='font-EricaOne text-accent font-normal'>HOT!</span></h2>
          <p className=' font-DM text-md lg:text-lg  w-[17.2rem] text-center mx-auto lg:mx-0 lg:text-left lg:w-[40rem] text-brandBlack'>Don't miss out on the biggest and events in Malawi, stay in the loop and ready for the best shows in the biggest and liveliest cities.</p>
        </div>
       
       {/* Event cards  */}
        <div className="grid md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-10 mt-20 justify-around  px-0 xl:px-12 xl:grid-cols-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>

        <div className="flex justify-center py-20">
          <NavLink to={"Events"}><PrimaryCTA name={"View more"}/></NavLink>
        </div>

      </section>

      {/* Be part of the conversation */}
      <section className='px-6 lg:px-12 py-32 grid grid-cols-1 xl:grid-cols-2 max-w-[96rem] mx-auto'>
      <div className="lg:py-12 px-0 lg:px-16 w-fit mx-auto">
          <p className='text-brandBlack font-bold text-2xl lg:text-3xl text-center lg:text-left'>Be part of the</p>
          <h2 className='font-EricaOne text-accent text-center lg:text-left text-3xl w-fit mx-auto lg:mx-0 md:text-5xl  pb-5'>CONCERT CONVERSATION</h2>
          <p className=' font-DM text-md lg:text-lg  w-[17.5rem] text-center mx-auto lg:mx-0 lg:text-left lg:w-[40rem] text-brandBlack lg:pb-12'>Don't miss out on the biggest and events in Malawi, stay in the loop and ready for the best shows in the biggest and liveliest cities.</p>
          <div className="pt-12 pb-32 mx-auto w-fit lg:mx-0">
            <NavLink to={"About"}><PrimaryCTA name={"Learn more"}/></NavLink>
          </div>
        </div>

        {/* Be part of the conversation graphics */}
        <div className="relative max-w-[70rem] scale-90 md:w-[30rem] md:mx-auto xl:w-[42rem]">
          
            <img src="images/Dome 3.png" alt="" className='absolute scale-50 lg:scale-100 -bottom-12 -right-10 lg:-bottom-20 lg:right-40'/>
            <img src="images/Rock2.png" alt="" className='scale-75  hidden lg:absolute lg:bottom-40 lg:right-40'/>
            <img src="images/TorusHalf3.png" alt="" className='scale-50 absolute -top-20 -right-8 lg:-top-20 lg:right-28'/>
            <img src="images/Hollow cube.png" alt="" className='scale-75 lg:scale-100 -top-32 left-40 absolute lg:-top-28 lg:left-56'/>
            <img src="images/Dome 3.png" alt="" className='scale-75 lg:scale-100 absolute -top-20 left-10 lg:-top-14 lg:left-10 rotate-[20deg]'/>
            <img src="images/TorusHalf4.png" alt="" className='scale-0 lg:scale-100 absolute top-72 -left-20 lg:top-72 lg:left-10 '/>
            <img src="images/Rock.png" alt="" className='scale-90 lg:scale-100  hidden lg:absolute lg:bottom-10 lg:left-10'/>
            <div className="">
          {/* main image */}
              <img src="https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='mx-auto w-[30rem] h-[30rem] md:h-[40rem] bg-fallBack rounded-full object-cover '/>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className='relative px-0 lg:px-12 pt-20 pb-0 lg:pb-80 max-w-[96rem] mx-auto'>
        <img src="images/Rock.png" alt="" className='hidden lg:absolute  top-32 left-80'/>
        <img src="images/Cone3.png" alt="" className='hidden lg:absolute  top-96 right-72 rotate-[310deg]'/>
        <img src="images/Torus.png" alt="" className='hidden lg:absolute scale-125 top-96 left-80'/>
        <div className="w-full bg-offBlack lg:w-fit lg:px-60 mx-auto lg:py-20 lg:rounded-3xl ">
          <p className='font-EricaOne text-3xl w-56 lg:w-fit  mx-auto text-center pt-10 lg:pt-0 lg:text-5xl text-white'>GET IN TOUCH WITH US</p>
          <p className='font-DM text-lg lg:text-3xl text-white font-light text-center pt-4'>For the lastest in social events</p>
          <div className="text-white text-lg text-center pt-10 font-DM">
            <div className="flex w-fit pb-2 mx-auto">
            < Useravatars avatar = {"https://images.pexels.com/photos/12128367/pexels-photo-12128367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/12128367/pexels-photo-12128367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            </div>
            <p className='pb-6 w-60 lg:w-fit mx-auto font-light'>Join other Konko users and advertise with us.</p>
              <NavLink to='Contact'><button  className='bg-white text-black rounded-md px-8 py-3 pr-8 hover:text-white hover:bg-accent duration-300 mb-28 lg:mb-0'>
              Contact Us
            </button></NavLink>
          </div>
        </div>
      </section>
     
    </main>
  )
} 

export default Home