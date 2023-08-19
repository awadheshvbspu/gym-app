import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import { workouts } from '../data';
import 'swiper/css';
import  'swiper/css/navigation';
import '../workoutSlider.css'

import Navigation from '../../node_modules/swiper/modules/navigation.mjs'
// import {Navigation} from 'swiper'

export default function WorkoutSlider() {
  const {programs} = workouts;
  return (
    <Swiper slidesPerView={2} spaceBetween={32} navigation={true} breakpoints={{
    768 :{
      slidesPerView: 3,
    },
    1024 :{
      slidesPerView :4,
    }

    }} modules={[Navigation]} className='workoutSlider'>


    {programs.map((program,i)=>{
      const {image,name} = program
      return(
     <SwiperSlide key={i} className='max-w-[320px] max-h-[320px] relative '>
     <img src={image} alt='' className='h-full w-full object-cover' />
     <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]'>
     <div className='foont-primary font-semibold text-sm text-neutral-500'>{name}</div>
     </div>
     </SwiperSlide>
      )
    })}
    </Swiper>
  )
}

