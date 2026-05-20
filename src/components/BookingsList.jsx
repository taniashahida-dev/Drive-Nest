
import { Button } from "@heroui/react";
import {
  FaCarSide,
  FaCalendarAlt,
  FaUserTie,
  FaStickyNote,
  FaDollarSign,
} from "react-icons/fa"

const BookingsList = ({booking}) => {
    return (
        <div className="my-4">
          
 <div className="group relative overflow-hidden rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0E8388]/40">
      
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0E8388]/10 blur-3xl transition-all duration-500 group-hover:bg-[#0E8388]/20" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E8388]/10">
              <FaCarSide className="text-2xl text-[#0E8388]" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#CBE4DE]">
                {booking.carName}
              </h2>

              <p className="text-[#CBE4DE]/60">
                Premium {booking.carType}
              </p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="rounded-2xl bg-[#0E8388]/10 px-4 py-3 text-center">
          <h3 className="text-2xl font-bold text-[#0E8388]">
            ${booking.dailyRentPrice}
          </h3>

          <p className="text-sm text-[#CBE4DE]/60">
            per day
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-linear-to-r from-transparent via-[#0E8388]/20 to-transparent" />

      {/* Details */}
      <div className="relative z-10 grid gap-5 md:grid-cols-2">

        {/* Booking Date */}
        <div className="rounded-2xl bg-[#2C3333] p-5">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-[#0E8388]" />

            <h4 className="font-semibold text-[#CBE4DE]">
              Booking Date
            </h4>
          </div>

          <p className="mt-3 text-[#CBE4DE]/60">
            {new Date(
              booking.bookingDate
            ).toLocaleDateString()}
          </p>
        </div>

        {/* Driver */}
        <div className="rounded-2xl bg-[#2C3333] p-5">
          <div className="flex items-center gap-3">
            <FaUserTie className="text-[#0E8388]" />

            <h4 className="font-semibold text-[#CBE4DE]">
              Driver Needed
            </h4>
          </div>

          <p
            className={`mt-3 font-medium ${
              booking.driverNeeded
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {booking.driverNeeded
              ? "Yes"
              : "No"}
          </p>
        </div>

        {/* Special Note */}
        <div className="rounded-2xl bg-[#2C3333] p-5 md:col-span-2">
          <div className="flex items-center gap-3">
            <FaStickyNote className="text-[#0E8388]" />

            <h4 className="font-semibold text-[#CBE4DE]">
              Special Note
            </h4>
          </div>

          <p className="mt-3 leading-relaxed text-[#CBE4DE]/60">
            {booking.specialNote || "No special requests"}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-7 flex items-center justify-between border-tpt-5">
        
 <Button className='text-red-600 px-3 py-1 bg-[#CBE4DE] rounded-3xl text-sm' >Delete booking</Button>
        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />

          <span className="text-sm font-medium text-green-400">
            Confirmed
          </span>

         
        </div>
      </div>
    </div>
        </div>
    );
};

export default BookingsList;