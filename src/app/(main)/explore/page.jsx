'use client'

import { useEffect, useState } from "react"
import CarCards from "@/components/CarCards"
import { getAllCars } from "@/lib/action"
import { Search } from "lucide-react"
import { ClipLoader } from "react-spinners"

const page = () => {

  const [cars, setCars] = useState([])

  const [search, setSearch] = useState("")

  const [type, setType] = useState("")

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const loadCars = async () => {

      setLoading(true)

      const data =
        await getAllCars(search, type)

      setCars(data)

      setLoading(false)
    }

    loadCars()

  }, [search, type])

  return (
    <section className="overflow-hidden px-6 py-10 lg:px-16 my-20">

      <div className="mx-auto w-11/12 md:w-10/12">

        {/* TOP HEADING */}
        <div className="mb-12 text-center">

          <h1 className="mt-6 text-4xl font-bold text-[#CBE4DE] md:text-5xl">
            Explore Our <span className="text-[#0E8388]">Luxury Cars</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#CBE4DE]/60">
            Choose from our wide range of premium vehicles designed for comfort,
            performance, and unforgettable driving experiences.
          </p>

        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-12 flex flex-col gap-4 rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] p-5 md:flex-row md:items-center md:justify-between">

          {/* SEARCH */}
          <div className="relative w-full md:max-w-md">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0E8388]"
            />

            <input
              type="text"
              placeholder="Search by car name..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] pl-12 pr-4 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
            />

          </div>

          {/* FILTER */}
          <div className="flex flex-col gap-4 md:flex-row">

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
              className="h-14 rounded-2xl border border-[#0E8388]/20 bg-[#2C3333] px-5 text-[#CBE4DE] outline-none focus:border-[#0E8388]"
            >
              <option value="">
                All Types
              </option>

              <option value="SUV">
                SUV
              </option>

              <option value="Sedan">
                Sedan
              </option>

              <option value="Luxury">
                Luxury
              </option>

              <option value="Sports">
                Sports
              </option>

              <option value="Convertible">
                Convertible
              </option>

            </select>

          </div>

        </div>

        {/* LOADING */}
        {
          loading ? (

            <div className="flex items-center justify-center py-20">

              <ClipLoader
                color="#0E8388"
                size={60}
              />

            </div>

          ) : (

            /* CARS GRID */
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

              {
                cars.map(car => (
                  <CarCards
                    key={car._id}
                    data={car}
                  />
                ))
              }

            </div>

          )
        }

      </div>

    </section>
  )
}

export default page