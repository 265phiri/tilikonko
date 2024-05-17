import {React,useState} from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import PrimaryCTA from './PrimaryCTA';


const Nav = () => {
  
  const [nav, setNav] = useState(false);

  const handleNav = () => {
      setNav(!nav);
    }

  return (
  <nav className='fixed top-0 z-50 flex items-center justify-between md:px-12 h-16 w-full px-4 sm:mx-auto bg-white'>
    <section className="">
      <NavLink to={"/"}><img src="tilikonko desktop.svg" alt="" className='hidden lg:block w-48 h-40' /></NavLink>
      <NavLink to={"/"}><img src="tilikonko mobile.svg" alt="" className='block lg:hidden scale-50' /></NavLink>
    </section>

    <section className='text-brandBlack hidden lg:block'>
    <NavLink to="/"
            className={({ isActive }) =>
              `mr-8 pb-2 border-b-2 transition-all duration-300 ${
                isActive ? 'border-accent text-accent' : 'border-white hover:text-accent hover:border-accent'
              }`
            }
          >Home</NavLink>
      <NavLink  className={({ isActive }) =>
              `mr-8 pb-2 border-b-2 transition-all duration-300 ${
                isActive ? 'border-accent text-accent' : 'border-white hover:text-accent hover:border-accent'
              }`
            }  to={"/about"}>About Us</NavLink>
      <NavLink  className={({ isActive }) =>
              `mr-8 pb-2 border-b-2 transition-all duration-300 ${
                isActive ? 'border-accent text-accent' : 'border-white hover:text-accent hover:border-accent'
              }`
            }  to={"/events"}>Events</NavLink>
      <NavLink to={"/contact"}><PrimaryCTA name={"Contact"}/></NavLink>
    </section>

    <div onClick={handleNav} className='block lg:hidden transition duration-500'>
          {!nav ? <AiOutlineMenu size={30}/> : <HiOutlineXMark size={30}/>}
    </div >

    <section className={nav ? 'fixed left-0 top-20 w-full h-full bg-white ease-in-out duration-500 border-[1px] border-slate-200' : 'ease-in-out duration-500 fixed left-[-100%] top-20 h-full w-full bg-white z-40 border-[1px] border-slate-200'}>
      <div className='grid mx-6 mt-32 font-EricaOne text-4xl text-brandBlack'>
        <NavLink className='mr-10 pb-5' onClick={handleNav} to={"/"}>Home</NavLink>
        <NavLink className='mr-10 pb-5' onClick={handleNav} to={"/about"}>About Us</NavLink>
        <NavLink className='mr-10 pb-5' onClick={handleNav}  to={"/events"}>Events</NavLink>
        <NavLink className='mr-10 pb-5 ' onClick={handleNav} to={"/contact"}>Contact</NavLink>
      </div>
    </section>

  </nav>
  )
}

export default Nav