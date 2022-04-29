import React, { useState } from 'react'

function Header(){

    const [ showNav, setShowNav ] = useState(true)
    const Menu = (e)  =>{
        e.name === 'menu' ? e.name = 'close' : e.name = "menu"

    }

    return(
        <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
                <span className="text-2x1 font-[Poppins]">
                    <img  className="h-10 inline" src="data:image/jpeg;base64,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" />
                    SmartEvents
                </span>

                <span className='text-3x1 cursor-pointer md:hidden block'>
                    <ion-icon name="menu" onclick={Menu}></ion-icon>
                </span>
            </div>
            <ul className='md:flex md:items-center z-[-1] md:z-auto
                md:z-auto md:static absolute bg-white w-full left-0
                md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all case-in 
                duration-500'
                >
                <li className='mx-4 my-6 my:my-0'>
                    <a href='#' className='text-x1 hover:text-cyan-500 duration-500'>About</a>
                </li>
                <li className='mx-4 my-6 my:my-0'>
                    <a href='#' className='text-x1 hover:text-cyan-500 duration-500'>Blog</a>   
                </li>
            

                <button className='bg-cyan-500 hover:bg-cyan-600 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded my-6 my:my-0' >
                Create Event
                </button>
            </ul>
        </nav>
    )
}
export default Header;