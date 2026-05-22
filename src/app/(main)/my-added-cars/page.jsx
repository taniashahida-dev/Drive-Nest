'use client'

import { useEffect, useState } from "react"
import { useSession } from "@/lib/auth-client"
import { deleteUserCar, getUserPostCars } from "@/lib/action"
import UserAddedCarCards from "@/components/UserAddedCarCards"
import { IdCardIcon } from "lucide-react"


const MyAddedCars = () => {

  const { data: session } = useSession()

  const user = session?.user

  const [cars, setCars] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (user?.email) {

      getUserPostCars(user.email)
        .then(data => setCars(data))
    }

  }, [user])

  // DELETE FUNCTION
  const handleDelete = async (id) => {

  try {

    setLoading(true)

    const data = await deleteUserCar(id)

    if (data.deletedCount > 0) {

      alert("Car Deleted Successfully ✅")

      // UI update
      const remainingCars =
        cars.filter(car => car._id !== id)

      setCars(remainingCars)
    }

  } catch (error) {

    console.log(error)

  } finally {

    setLoading(false)
  }
}

  return (
    <div className="mt-28 mb-10 w-11/12 mx-auto">

      {/* TOP */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        <h1 className="text-3xl font-bold text-[#CBE4DE]">
          My Added <span className="text-[#0E8388]">Cars</span>
        </h1>

        <p className="text-[#0E8388]">
          Total Cars: {cars.length}
        </p>
      </div>

      {/* LIST */}
      <div className="mt-10 flex flex-col gap-5">

        {
          cars.map(car => (
            <UserAddedCarCards
              key={car._id}
              car={car}
              handleDelete={handleDelete}
            />
          ))
        }

      </div>

      {/* EMPTY */}
      {
        cars.length === 0 && (
          <div className="mt-20 rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] py-20 text-center">

            <h2 className="text-3xl font-bold text-[#CBE4DE]">
              No Cars Added
            </h2>

            <p className="mt-3 text-[#CBE4DE]/50">
              Your added cars will appear here.
            </p>
          </div>
        )
      }
    </div>
  )
}

export default MyAddedCars