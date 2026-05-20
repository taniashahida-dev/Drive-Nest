import BookingsList from '@/components/BookingsList';
import { getBookingData } from '@/lib/action';

const BookingsPage =async () => {
    const bookings = await getBookingData()
    // console.log(bookings)
    return (
        <div className=' my-28 w-11/12 md:10/12 mx-auto' >
          
                 <div className="flex justify-between items-center">
         <h2 className="text-2xl md:text-4xl font-bold text-[#CBE4DE]">
     Your <span className="text-[#0E8388]">
            Bookings
          </span>
      </h2>
    <p className="text-[#0E8388] cursor-pointer text-sm md:text-lg flex items-center gap-1 hover:text-[#2E4F4F] ">({bookings.length}) Bookings found </p>
     </div>
          
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
bookings.map(booking => <BookingsList key={booking._id} booking={booking}></BookingsList>)
    }
</div>

        </div>
    );
};

export default BookingsPage;