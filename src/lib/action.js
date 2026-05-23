'use server'
import { revalidatePath } from "next/cache"


export const getAllCars = async( search = "", type = "")=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car?search=${search}&type=${type}`,{
       cache: "no-store",
    })
    return res.json()
}
export const getCarsDetails = async(id,token)=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/explore/${id}`,{
        headers:{
          authorization: `Bearer ${token}`|| ''
        }
        
    })
    return res.json()
}
export const getAvailableCars = async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-cars`)
    return res.json()
}
export const getBookingData = async(email,token)=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${email}`,
        {
      cache: "no-store",

       headers:{
          authorization: `Bearer ${token}`|| ''
        }
    }
    )
    return res.json()
}

export const increaseBookingCount = async (id) => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking-count/${id}`,
    {
      method: "PATCH"
    }
  )

  return res.json()
}

export const PostbookingData = async (bookingData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  return res.json();
};

export const deleteBooking = async(id)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`,{
  method:"DELETE"
})
const data =await res.json()
 if (data.deletedCount > 0) {
revalidatePath("/my-bookings")
      }
return data
}


export const getUserPostCars = async(email,token)=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user-cars/${email}`,{
       cache: "no-store",
         headers:{
          authorization: `Bearer ${token}`|| ''
        }
    })
    return res.json()
}

export const postUserCars = async (carData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user-cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });

  return res.json();

};

export const deleteUserCar = async(id)=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user-cars/${id}`,{
  method:"DELETE"
})
const data = res.json()
 if (data.deletedCount > 0) {
revalidatePath("/my-added-cars")
      }
return data
}

export const updateUserCar = async(id, updatedCar)=>{

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user-cars/${id}`,
    {
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedCar)
    }
  )

  return res.json()
}

