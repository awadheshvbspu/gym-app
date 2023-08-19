import React,{useState,useEffect} from 'react';
import { header } from '../data';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import {RiMenu4Fill,RiCloseFill} from 'react-icons/ri'

export default function Header() {
  const [isActive,setIsActive] =useState(false)

const [navMobile,setNavMobile] = useState(false)

useEffect(()=>{
window.addEventListener('scroll', () =>{
  window.scrollY >80 ? setIsActive(true) : setIsActive(false)
})

})

  const {logo,btnLoginText,btnSignupText} = header;
  return (
    <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0 m-auto flex justify-between items-center px-[20px] lg:px-[80px] translate-x-all duration-300`}>
    
    <a href='#'>
    <img src={logo} alt='' className='h-[30px]'/>
    </a>
    <Nav/>
    <div className='hidden lg:flex space-x-4 '>
    <button className='btn btn-sm text-white hover:text-primary-200 transition'>{btnLoginText}</button>
    <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
    </div>
    <div className='lg:hidden absolute right-4 ' onClick={()=>setNavMobile(!navMobile)}>
    {navMobile ? <RiCloseFill className='text-primary-200 text-3xl  cursor-pointer'/> : <RiMenu4Fill  className='text-primary-200 text-3xl cursor-pointer'/>}
    </div>
    <NavMobile navMobile={navMobile}/>
    </header>
  )
}

