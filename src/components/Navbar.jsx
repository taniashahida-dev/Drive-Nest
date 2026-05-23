
'use client'

import Link from 'next/link';
import Navlink from './Navlink';
import {  useState } from 'react';
import Image from 'next/image';
import { authClient, useSession } from '@/lib/auth-client';
import Navlink2 from './NavLink2';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const Navbar = () => {
    const router = useRouter()

    const [open, setOpen] = useState(false)

    const { data: session, isPending } = useSession();
    // console.log(session)
    const user = session?.user
const handleLogOut = async () => {

  await authClient.signOut()

  window.location.href = "/"
}
    return (
        <div>

            <nav className="bg-[#2C3333] border-b border-[#2E4F4F] fixed top-0 left-0 right-0 z-1000 px-4 pt-3">

                <div className={`max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center  bg-darker/40 backdrop-blur-md rounded-2xl`}>

                    {/* Logo */}
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#0E8388]">
                        DriveFleet
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-[#CBE4DE] font-medium">
                        <Navlink href="/" className="hover:text-[#0E8388] transition">
                            Home
                        </Navlink>

                        <Navlink href="/explore">
                            Explore Cars
                        </Navlink>

                        <Navlink href="/add-car">
                            Add Car
                        </Navlink>

                        <Navlink href="/my-bookings">
                             My Bookings
                        </Navlink>
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:block">
                        {isPending ? (
                            <span className="loading loading-ring loading-xl"></span>
                        ) : user ? (
                            <div className="flex items-center gap-4">
                                <div className="dropdown relative group">
                                    <button className="flex items-center gap-2 bg-[#2E4F4F] text-[#AEB784] transition px-4 py-2 rounded-2xl">
                                        <Image
                                            src={user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                            alt="user"
                                        />

                                        <span className="font-medium">
                                            {user?.name}
                                        </span>
                                    </button>

                                    <div className="absolute right-0 mt-1 w-56 justify-center text-center rounded-3xl shadow-xl py-2 px-2 hidden group-hover:block border border-[#E3DBBB] ">
                                        <Navlink2 href="/my-added-cars">
                                            My Added Cars
                                        </Navlink2>

                                        <Navlink2 href="/my-bookings">
                                            My Bookings
                                        </Navlink2>

                                        <Navlink2 href="/add-car">
                                            Add New Car
                                        </Navlink2>

                                        <hr className="my-2 border-[#E3DBBB]" />

                                        <button  onClick={handleLogOut} className="w-full rounded-3xl px-6 py-3 text-center  text-red-600 hover:bg-red-400 bg-[#CBE4DE]">
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link href={'/login'}>
                                <button className="bg-[#0E8388] text-[#CBE4DE] px-6 py-3 rounded-2xl font-semibold hover:bg-[#2E4F4F] transition">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-[#CBE4DE] text-2xl"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-150 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                    <div className="bg-[#2C3333] border border-[#2E4F4F] rounded-2xl p-6 flex flex-col gap-5 text-[#CBE4DE] font-medium">

                        <Navlink href="/">
                            Home
                        </Navlink>

                        <Navlink href="/explore">
                            Explore Cars
                        </Navlink>

                        <Navlink href="/add-car">
                            Add Car
                        </Navlink>

                        <Navlink href="/my-bookings">
                            My Bookings
                        </Navlink>

                        <hr className="border-[#2E4F4F]" />

                        {/* Mobile Auth */}
                        {isPending ? (
                            <span className="loading loading-ring loading-xl"></span>
                        ) : user ? (
                            <div className="flex flex-col gap-4">

                                {/* User Info */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                                        width={45}
                                        height={45}
                                        className="rounded-full w-full h-auto "
                                        alt="user"
                                    />

                                    <div>
                                        <h3 className="font-semibold text-[#CBE4DE]">
                                            {user?.name}
                                        </h3>

                                        <p className="text-sm text-[#CBE4DE]/60">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex justify-center text-center flex-col gap-3">
                                    <Navlink2 href="/my-added-cars">
                                        My Added Cars
                                    </Navlink2>

                                    <Navlink2 href="/my-bookings">
                                        My Bookings
                                    </Navlink2>

                                    <Navlink2 href="/add-car">
                                        Add New Car
                                    </Navlink2>

                                    <button  onClick={handleLogOut} className="w-full rounded-3xl px-6 py-3 text-center  text-red-600 hover:bg-red-400 bg-[#CBE4DE]">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link href={'/login'}>
                                <button className="bg-[#0E8388] text-[#CBE4DE] px-6 py-3 rounded-2xl font-semibold hover:bg-[#2E4F4F] transition w-full">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;