import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleSec } from '../features/ToggleSlice';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch();
    return (
        <header className='fixed top-0 left-0 w-full py-4 px-[9%] bg-[#1f242d] flex items-center justify-between z-[100]'>
            <a href="#" className='logo text-5xl font-bold text-white'>AR.</a>
            <nav className='hidden md:flex'>
                <a href="#" onClick={() => dispatch(toggleSec({ txt: 'home' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-medium ml-14 transition-[.5s]">Home</a>
                <a href="#" onClick={() => dispatch(toggleSec({ txt: 'services' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-medium ml-14 transition-[.5s]">Services </a>
                <a href="#" onClick={() => dispatch(toggleSec({ txt: 'resume' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-medium ml-14 transition-[.5s]">Resume</a>
                <a href="#" onClick={() => dispatch(toggleSec({ txt: 'portfolio' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-medium ml-14 transition-[.5s]">Portfolio</a>
                <a href="#" onClick={() => dispatch(toggleSec({ txt: 'contact' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-medium ml-14 transition-[.5s]">Contact</a>
            </nav>
            <div className="flex md:hidden">
                <p onClick={() => setShowMenu(!showMenu)} className='text-3xl font-medium text-[#7cf03d]'>menu</p>
            </div>
            <div className={`absolute ${showMenu?'flex md:hidden':'hidden'} w-full flex items-start justify-between z-50 text-center bg-gray-300 text-[#60894a] w-full top-0 right-0`}>
                <nav className='flex flex-col items-start justify-center py-8'>
                    <a href="#" onClick={() => dispatch(toggleSec({ txt: 'home' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-bold ml-14 transition-[.5s]">Home</a>
                    <a href="#" onClick={() => dispatch(toggleSec({ txt: 'services' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-bold ml-14 transition-[.5s]">Services </a>
                    <a href="#" onClick={() => dispatch(toggleSec({ txt: 'resume' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-bold ml-14 transition-[.5s]">Resume</a>
                    <a href="#" onClick={() => dispatch(toggleSec({ txt: 'portfolio' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-bold ml-14 transition-[.5s]">Portfolio</a>
                    <a href="#" onClick={() => dispatch(toggleSec({ txt: 'contact' }))} className="nav-btn text-[2rem] hover:text-[#7cf03d] font-bold ml-14 transition-[.5s]">Contact</a>

                </nav>
                <p onClick={() => setShowMenu(!showMenu)} className='p-8 font-bold text-red-500 text-2xl'>X</p>
            </div>
        </header>
    )
}

export default Navbar
