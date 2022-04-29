import React, {useState} from 'react'

import Button from './Button';

const Navbar =  () =>{

    let links = [
        {name: "HOME", link: "/"},
        {name: "SERVICE", link: "/"},
        {name: "ABOUT", link: "/"},
        {name: "BLOG'S", link: "/"},
        {name: "CONTACT", link: "/"},

    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
        <div className='md:flex items-center justify-between md:px-10 px-3'>
                <div className='font-bold text-2xl cursor-pointer flex items-center  font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-l pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    BlockChain Event
                </div>
                <div  onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center z-[-1]
                md:z-auto md:static absolute bg-white w-full left-0 md:w-auto  md:py-0 mp:y-4 md:pl-0  pl-8 transition-all duration-500 case-in 
                    ${open ?  'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0 `}>
                    {
                        links.map((link) =>(
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>
                        Get Started
                    </Button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;