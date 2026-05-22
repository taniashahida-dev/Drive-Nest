'use client'

import { postUserCars } from "@/lib/action";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const AddCarForm = () => {
 const router = useRouter()
  const { data: session } = useSession()
const user = session?.user
  const handleSubmit = async(e) => {
  

     e.preventDefault();
const formdata = new FormData(e.target)
console.log(formdata)
const userCar =  {
  ...Object.fromEntries(formdata.entries()),
  userEmail: user?.email,
}
const postUserCar = await postUserCars(userCar)
 if (!postUserCar?.acknowledged) {

      alert("Added failed")

      return
    }

    alert("Car Added Successfully ✅")

    router.push("/")
  }

  
  return (
    <section className="min-h-screen bg-[#2C3333] px-4 py-10 md:px-8 my-10">
      
      {/* Container */}
      <div className="mx-auto max-w-5xl">
        
        {/* Top Divider */}
        <div className="relative mb-10">
          <div className="h-px bg-linear-to-r from-transparent via-[#0E8388]/40 to-transparent" />

          <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#0E8388] blur-sm" />
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] p-5 shadow-2xl md:p-10">
          
          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#CBE4DE] md:text-4xl">
              List Your Car
            </h1>

            <p className="mt-3 text-[#CBE4DE]/60">
              Add your vehicle details and start earning from rentals.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            
            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Car Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                  Car Name
                </label>

                <input
                  type="text"
                  name="name"
                 
                  placeholder="BMW X5"
                  className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
                />
              </div>

              {/* Daily Rent */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                  Daily Rent Price ($)
                </label>

                <input
                  type="number"
                  name="dailyRentPrice"
                 
                  placeholder="120"
                  className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
                />
              </div>

              {/* Car Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                  Car Type
                </label>

                <select
                  name="carType"
                 
                  className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none transition-all focus:border-[#0E8388]"
                >
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Hatchback</option>
                  <option>Luxury</option>
                  <option>Sports</option>
                  <option>Convertible</option>
                </select>
              </div>

              {/* Seat Capacity */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                  Seat Capacity
                </label>

                <input
                  type="number"
                  name="seatCapacity"
                 
                  placeholder="5"
                  className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
                />
              </div>

              {/* Pickup Location */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                  Pickup Location
                </label>

                <input
                  type="text"
                  name="pickupLocation"
                
                  placeholder="New York"
                  className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                  Availability Status
                </label>

                <select
                  name="availability"
                 
                  className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none transition-all focus:border-[#0E8388]"
                >
                  <option value="available">
                    Available
                  </option>

                  <option value="unavailable">
                    Unavailable
                  </option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                Image URL
              </label>

              <input
                type="text"
                name="image"
               
                placeholder="https://images.unsplash.com/..."
                className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
                Description
              </label>

              <textarea
                rows={6}
                name="description"
                
                placeholder="Describe the car features, condition, and highlights..."
                className="w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] p-5 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#0E8388] py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#0c7478]"
            >
              Add Car Listing
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCarForm