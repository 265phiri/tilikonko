import { useState} from 'react'
import { VscEye } from "react-icons/vsc";
import { PiEyeClosed } from "react-icons/pi";

const SignIn = () => {

  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <main className='pt-32 back grid grid-cols-1 xl:grid-cols-2 pb-32 xl:pb-0'>
      <section className='px-3 pb-32'>
        <div className="text-brandBlack text-DM text-center pb-20 xl:text-left xl:mx-8 xl:mt-2">
          <img src="src/assets/logo.png" alt="" className='mx-auto scale-90 xl:hidden '/>
          <p className='text-2xl font-medium pt-8 xl:text-4xl xl:font-normal'>Welcome back!</p>
          <p className='text-sm font-medium'>Sign in to continue</p>
        </div>
        <div className=" mx-auto md:w-96 xl:w-[30rem] xl:mx-0 xl:px-8">
          <input type="text" name="" id="" placeholder='Username' className='border-slate-200 border-[1px] px-4 py-3 w-full rounded-md placeholder-brandBlack font-DM mb-4 outline-fadedAccent'/>
          <div className="relative">

           <input type={(open === false) ? 'password' : 'text'} name="" id="" placeholder='Password' className='border-slate-200 border-[1px] px-4 py-3 w-full rounded-md placeholder-brandBlack font-DM outline-fadedAccent'/>
              <div className="absolute top-4 right-5 ">
                {
                  (!open === false) ? <VscEye onClick={handleToggle} size={23} color='#1B0A31'/> : <PiEyeClosed onClick={handleToggle} size={23} color='#1B0A31'/>
                }
                
              </div>
          </div>
          <div className="pt-8">
            <button className='w-full py-3 bg-offBlack rounded-md text-white'>Confrim</button>
          </div>
          <p className='text-gray-400 text-sm leading-4 pt-10 text-center hidden xl:block xl:text-left xl:w-96'>Stay in the know with Tilikonko, we keep you updated on the latest social events all around the country</p>
        </div>

      </section>
      <section className='xl:flex mr-16 -mt-12 hidden '>
          <img src="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-[2rem] h-[37rem] w-[44rem] object-cover' />
      </section>
    </main>
  )
}

export default SignIn