// import Image from 'next/image';

import Link from 'next/link';


const Navbar = () => {
    return (
        <div>
            <nav className="bg-[#F8F3E1] border-b border-[#E3DBBB] sticky top-0 z-50 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#41431B] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">🚗</div>
      <h1 className="text-3xl font-bold tracking-tight text-[#41431B]">DriveFleet</h1>
    </div>

    <div className="hidden md:flex items-center gap-8 text-[#41431B] font-medium">
      <Link href="/" className="hover:text-[#AEB784] transition">Home</Link>
      <a href="/explore" className="hover:text-[#AEB784] transition">Explore Cars</a>
      <a href="/add-car" className="hover:text-[#AEB784] transition">Add Car</a>
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
      <button className="bg-[#41431B] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-black transition">
        Login
      </button>
    {/* )} */}
  </div>
</nav>
        </div>
    );
};

export default Navbar;