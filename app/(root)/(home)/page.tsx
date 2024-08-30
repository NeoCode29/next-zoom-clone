import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'
const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});
  const date = (new Intl.DateTimeFormat("id-ID",{dateStyle : "full"})).format(now);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className="h-[300px] w-full bg-hero rounded-md bg-cover">
        <div className="flex flex-col h-full justify-between p-4 max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className='glassmorphism max-w-[270px] py-2 text-center text-base rounded font-normal'>
            Upcoming Meeting at: 20:15 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h2 className='text-4xl font-extrabold'>{time}</h2>
            <p className='text-sky-100'>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  )
}

export default Home