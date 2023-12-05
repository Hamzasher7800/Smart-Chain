import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 

function Header({OpenSidebar}) {
  return (
    <header className='Header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
            <input className='icon-search' type="text" placeholder='Search' />
        </div>
        
            
        <div className='header-right'>
            <BsFillBellFill className='icon'/>     
        </div>
        <div className='header-right'>
        <BsFillEnvelopeFill className='icon'/>    
        </div>
        <div className='header-right'>
        <BsPersonCircle className='icon'/>    
        </div>

    </header>
  )
}

export default Header