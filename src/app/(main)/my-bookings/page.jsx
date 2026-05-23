
'use client'

import { useEffect, useState }
from "react"

import BookingsList
from "@/components/BookingsList"

import { deleteBooking, getBookingData }
from "@/lib/action"

import { useSession ,authClient}
from "@/lib/auth-client"




const BookingsPage = () => {

  const [bookings, setBookings] =
    useState([])

  const {
    data: session,
    isPending
  } = useSession()

  const user = session?.user

  useEffect(() => {

const loadBookings = async () => {

  if(user?.email){

  // const { data } =
  //   await authClient.getSession()

 const { token } =
  await authClient.getToken()
  console.log("TOKEN:", token)

  const bookingsData =
    await getBookingData(
      user.email,
      token
    )

  console.log(bookingsData)

  if(Array.isArray(bookingsData)){
    setBookings(bookingsData)
  } else {
    setBookings([])
  }

  }
}
  loadBookings()

}, [user])

  const handleCancelBooking = async (id) => {

  const result = await deleteBooking(id)

  if(result.deletedCount > 0){

    const remainingBookings =
      bookings.filter(
        booking => booking._id !== id
      )

    setBookings(remainingBookings)
  }
}

  if(isPending){

    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-xl text-[#0E8388]" />
      </div>
    )
  }



  return (
    <div className='my-28 w-11/12 md:w-10/12 mx-auto'>

      <div className="flex justify-between items-center">

        <h2 className="text-2xl md:text-4xl font-bold text-[#CBE4DE]">
          Your{" "}
          <span className="text-[#0E8388]">
            Bookings
          </span>
        </h2>

        <p className="text-[#0E8388] text-sm md:text-lg">
          ({bookings.length})
          Bookings found
        </p>
      </div>

      {
        bookings.length == 0 ?  <div className="mt-20 rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] py-20 text-center">

            <h2 className="text-3xl font-bold text-[#CBE4DE]">
              No Bookings 
            </h2>

            <p className="mt-3 text-[#CBE4DE]/50">
              Your Bookings cars will appear here.
            </p>
          </div>:
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>



        {
          Array.isArray(bookings) &&
bookings.map(booking => (
  <BookingsList
    key={booking._id}
    booking={booking}
    handleCancelBooking={
      handleCancelBooking
    }
  />
))
        }

      </div>
      }

      
    </div>
  )
}

export default BookingsPage