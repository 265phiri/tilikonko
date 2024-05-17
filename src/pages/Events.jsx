import React from 'react'
import EventTags from '../components/EventTags'
import EventCard from '../components/EventCard'

const Events = () => {
  return (
    <main className='pt-28 bg-background pb-32 mx-auto'>
      <section className='px-7 text-center'>
        <p className='font-bold text-brandBlack text-lg lg:text-2xl'>We got you</p>
        <h2 className='text-accent font-EricaOne text-5xl'>COVERED</h2>
      </section>

      <section className='max-w-[96rem] mx-auto'>
        <div className="max-w-[21rem] md:mx-16 lg:pb-4 lg:mx-10 xl:mx-12 ">
          <EventTags />
        </div>
        <div className="grid md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-10 justify-around  px-0 xl:px-12 xl:grid-cols-4 max-w-[96rem] mx-auto">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </main>
  )
}

export default Events