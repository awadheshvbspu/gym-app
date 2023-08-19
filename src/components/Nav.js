import React from 'react';
import {nav} from '../data'

export default function Nav() {
  return (
    <nav className='hidden lg:flex'>
    <ul className='flex gap-x-8 text-white'>
    {nav.map((item,i)=>{
      return(
        <li key={i}>
        <a href={item.href} className='hover:text-primary-200 transition'>{item.name}</a>
        </li>
      )
    })}
    </ul>
    </nav>
  )
}

