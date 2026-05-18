export const getAllCars = async()=>{
    const res =await fetch(``)
    return res.json()
}
export const getCarsDetails = async(id)=>{
    const res =await fetch(``)
    return res.json()
}
export const getAvailableCars = async()=>{
    const res =await fetch(`${process.env.SERVER_URL}/available-cars`)
    return res.json()
}