export const getAllCars = async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`)
    return res.json()
}
export const getCarsDetails = async(id)=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/explore/${id}`)
    return res.json()
}
export const getAvailableCars = async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-cars`)
    return res.json()
}
export const getBookingData = async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`)
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