import React from 'react'
import './Home.css'
import MultiItemcarousel from './multiItemcarousel.jsx'
import { topMeals } from './topMeals';
//import { homepageBanner } from './homepageBanner.jsx';
const Home = () => {
  return (
    <div>
        <section className='-z-50 banner relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-7xl font-bold z-10 py-5'>Fill Hunger</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Best Taste Ever,fast delivary, with best quality</p> 
                </div>
                <div className='cover absolute top-0 left-0 right-0'></div>
  <div className='fadeout'></div>
{/*<MultiItemcarousel items1={homepageBanner}/>*/}
        </section>

        <section className='p-10 lg:py-10 lg:px-20'>
            <div className=''>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top</p>
            </div>   
            <MultiItemcarousel items={topMeals}/>
        </section>
      
    </div>
  )
}

export default Home
