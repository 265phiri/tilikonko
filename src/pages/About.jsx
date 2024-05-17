import React from 'react'

const About = () => {
  return (
    <main className='pt-24 pb-32 bg-background'>
      <section className='mx-auto'>
        <div className="text-center">
          <p className='text-brandBlack font-bold text-lg xl:text-2xl'>Your all in one</p>
          <h2 className='text-accent font-EricaOne text-3xl xl:text-4xl'>ADVERTISING PLATFORM</h2>
        </div>
        
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 pt-12 pb-20 md:pb-0 md:pt-0 md:scale-90  max-w-[96rem] mx-auto xl:pt-10'>

        {/* First column festivals and parties */}
          <div className='relative md:w-96 md:mx-auto xl:scale-125 xl:mt-20 scale-75 lg:scale-100'>
            <img src="src/assets/Rock2.png" alt=""className='absolute scale-50 bottom-20 left-0 xl:scale-100'/>
            <img src="src/assets/Dome 3.png" alt=""className='absolute scale-50 left-0 -top-32 rotate-[20deg] xl:scale-100'/>
            
            <div className="p-2 h-fit w-fit rounded-full mx-auto">
              <img src="https://images.pexels.com/photos/17317652/pexels-photo-17317652/free-photo-of-man-standing-in-eyeglasses-and-with-hand-raised-on-purple-background.jpeg?auto=compress&cs=tinysrgb&w=400" className="bg-fallBack object-cover h-[23rem] w-56 rounded-full mx-auto"/>
            </div>

            <div className="text-brandBlack font-EricaOne mx-auto w-fit mt-4 text-2xl xl:text-3xl text-center underline xl:absolute top-0 -right-32 cursor-default">
              <h2 className='hover:text-accent duration-300 ease-in-out'>FESTIVALS &</h2>
              <h2 className='hidden xl:block text-left px-8 hover:text-accent duration-300 ease-in-out'>&</h2>
              <h2 className='hover:text-accent duration-300 ease-in-out'>PARTIES</h2>
            </div>

        </div>

        {/* Concerts and Perforamnces */}
        <div className='relative md:w-96 md:mx-auto xl:scale-125 xl:mt-20 scale-75 pt-32 lg:scale-100'>
            <img src="src/assets/Rock.png" alt=""className='absolute scale-75 right-0 -top-20 xl:scale-100'/>
            <img src="src/assets/TorusHalf4.png" alt=""className='absolute scale-50 rotate-[30deg] -bottom-40 -left-16 xl:scale-100 xl:left-10 xl:-bottom-40 xl:rotate-6'/>
            <div className="p-2 h-fit w-fit rounded-full mx-auto">
              <img src="https://images.pexels.com/photos/3358299/pexels-photo-3358299.jpeg?auto=compress&cs=tinysrgb&w=600" className="bg-fallBack object-cover h-[23rem] w-56 rounded-full mx-auto"/>
          </div>
          <div className="text-brandBlack font-EricaOne mx-auto w-fit mt-4 text-2xl xl:text-3xl text-center underline xl:absolute xl:top-0 xl:-right-10 xl:text-right cursor-default">
              <h2 className='hover:text-accent duration-300 ease-in-out'>CONCERTS</h2>
              <h2 className='hover:text-accent duration-300 ease-in-out'>&</h2>
              <h2 className='hover:text-accent duration-300 ease-in-out'>PERFORMANCES</h2>
          </div>

        </div>
        {/* Exhibitions */}
        <div className='relative md:col-span-2 md:w-96 md:mx-auto xl:scale-125 xl:-mt-40 scale-75 lg:scale-100'>
          <img src="src/assets/TorusHalf4.png" alt=""className='absolute scale-75 -bottom-40 left-0 rotate-[1deg] xl:left-10'/>
          <img src="src/assets/Torus.png" alt=""className='absolute scale-50 -left-10 top-6 xl:scale-90 xl:-top-40 xl:left-20'/>
          <img src="src/assets/Rock.png" alt=""className='absolute scale-75 rotate-[30deg] bottom-10 -left-2 xl:scale-100'/>
          <img src="" alt=""/>
          <div className="p-2 h-fit w-fit rounded-full mx-auto">
            <img src="https://images.pexels.com/photos/7658692/pexels-photo-7658692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="bg-fallBack object-cover h-[23rem] w-56 rounded-full mx-auto "/>
          </div>

          <div className="text-brandBlack font-EricaOne mx-auto w-fit text-2xl mt-4 xl:text-3xl text-center underline cursor-default xl:absolute xl:-left-40 xl:bottom-40">
          <h2 className='hover:text-accent duration-300 ease-in-out'>EXHIBITIONS</h2>
             
          </div>
        </div>
      </section>

      <section className='pt-40 xl:pt-56'>
        <div className="mx-auto mb-8">
          <div className="text-center px-10">
            <p className='text-brandBlack font-bold text-lg xl:text-2xl'>Advertisement</p>
            <h2 className='text-accent font-EricaOne text-3xl xl:text-4xl'>TAILORED FOR YOU</h2>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm px-4 max-w-[68rem] mx-auto xl:mt-12">
          <div className=' text-DM text-brandBlack text-center max-w-80 xl:text-left '>
            <h3 className='font-bold text-2xl pb-3'>Festivals & Parties</h3>
            <p className=' xl:text-left'>At Tilikonko, we’re passionate about celebrating life through music, art, culture, and community. Our platform is your virtual festival grounds—a place where festival-goers, artists, and organizers converge to create unforgettable experiences.</p>
          </div>
          <div className=' text-DM text-brandBlack text-center xl:text-left max-w-80'>
            <h3 className='font-bold text-2xl pb-3'>Concerts &
            Performances</h3>
            <p className=' xl:text-left'>Are you ready to amplify your audience reach? Look no further than Tilikonko, the ultimate stage for promoting your concerts and performances.</p>
          </div>
          <div className=' text-DM text-brandBlack text-center xl:text-left max-w-80'>
            <h3 className='font-bold text-2xl pb-3'>Exhibitions</h3>
            <p>Your exhibition deserves the spotlight. We’ll showcase it on our homepage, catching the eyes of art enthusiasts, collectors, and culture connoisseurs.</p>
          </div>
        </div>

      </section>
    </main>
  )
}

export default About