
'use client'

import Link from 'next/link';
import Navlink from './Navlink';
import { useState } from 'react';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    return (
        <div>

            <nav className="bg-[#2C3333] border-b border-[#2E4F4F]      fixed top-0 left-0 right-0 z-[1000] px-4 pt-3">


  <div className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${scrolled ? "bg-darker/90 backdrop-blur-2xl shadow-sm shadow-[#2E4F4F]" : "bg-darker/40 backdrop-blur-md  "}`}>
   
      <h1 className="text-4xl font-bold tracking-tight text-[#0E8388]">DriveFleet</h1>
    

    <div className="hidden md:flex items-center gap-8 text-[#CBE4DE] font-medium">
      <Navlink href="/" className="hover:text-[#0E8388] transition">Home</Navlink>
      <Navlink href="/explore" >Explore Cars</Navlink>
      <Navlink href="/add-car" >Add Car</Navlink>
      <Navlink href="/bookings" >Bookings</Navlink>
    </div>

    {/* Auth Section */}
    {/* {user ? (
      <div className="flex items-center gap-4">
        <div className="dropdown relative group">
          <button className="flex items-center gap-2 bg-[#E3DBBB] hover:bg-[#AEB784] transition px-4 py-2 rounded-2xl">
            <Image src={user.photo} className="w-8 h-8 rounded-full object-cover" alt="" />
            <span className="font-medium">{user.name.split(' ')[0]}</span>
          </button>
      
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-3xl shadow-xl py-2 hidden group-hover:block border border-[#E3DBBB]">
            <a href="/my-added-cars" className="block px-6 py-3 hover:bg-[#F8F3E1]">My Added Cars</a>
            <a href="/my-bookings" className="block px-6 py-3 hover:bg-[#F8F3E1]">My Bookings</a>
            <a href="/add-car" className="block px-6 py-3 hover:bg-[#F8F3E1]">Add New Car</a>
            <hr className="my-2 border-[#E3DBBB]" />
            <button onClick={logout} className="w-full text-left px-6 py-3 text-red-600 hover:bg-red-50">Logout</button>
          </div>
        </div>
      </div>
    ) : ( */}
      <button className="bg-[#0E8388] text-[#CBE4DE] px-6 py-3 rounded-2xl font-semibold hover:bg-[#2E4F4F] transition">
        Login
      </button>
    {/* )} */}
  </div>
</nav>
        </div>
    );
};

export default Navbar;