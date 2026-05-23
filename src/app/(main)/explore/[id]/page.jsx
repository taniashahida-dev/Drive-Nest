import { getCarsDetails } from "@/lib/action";
import Image from "next/image";
import {
  FaCarSide,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import BookNowButton from "@/components/BookingModal";

const CarDetailPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  //  console.log(token)

  const car = await getCarsDetails(id, token);

  return (
    <section className="min-h-screen px-6 py-16 text-[#CBE4DE]">
      <div className="mx-auto max-w-7xl">
        {/* Top Divider */}
        <div className="relative mb-16">
          <div className="h-px bg-linear-to-r from-transparent via-[#0E8388]/40 to-transparent" />
          <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#0E8388] blur-sm" />
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] shadow-2xl p-4">
            <div className="relative h-75 md:h-125">
              <Image
                src={car?.image}
                alt={car?.name || "Car Image"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition duration-500 hover:scale-105 rounded-3xl"
              />
            </div>

            <h1 className="text-4xl font-bold md:text-5xl my-5">{car.name}</h1>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Description</h2>
              <p className="leading-relaxed text-[#CBE4DE]/65">
                {car.description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#0E8388]/20 bg-[#0E8388]/10 px-4 py-2 text-sm text-[#0E8388]">
              <FaCheckCircle />
              {car.availability}
            </div>

            <p className="mt-3 text-lg text-[#CBE4DE]/60">
              Premium {car.carType}
            </p>

            {/* Price */}
            <div className="mt-8 flex items-end gap-2">
              <h2 className="text-5xl font-bold text-[#0E8388]">
                ${car.dailyRentPrice}
              </h2>
              <span className="mb-1 text-[#CBE4DE]/60">/ day</span>
            </div>

            {/* Specs */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-[#0E8388]/10 bg-[#2E4F4F] p-5">
                <FaCarSide className="mb-3 text-2xl text-[#0E8388]" />
                <p className="text-sm text-[#CBE4DE]/50">Car Type</p>
                <h3 className="mt-1 text-lg font-semibold">{car.carType}</h3>
              </div>

              <div className="rounded-2xl border border-[#0E8388]/10 bg-[#2E4F4F] p-5">
                <FaUsers className="mb-3 text-2xl text-[#0E8388]" />
                <p className="text-sm text-[#CBE4DE]/50">Seat Capacity</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {car.seatCapacity} Seats
                </h3>
              </div>

              <div className="rounded-2xl border border-[#0E8388]/10 bg-[#2E4F4F] p-5">
                <FaMapMarkerAlt className="mb-3 text-2xl text-[#0E8388]" />
                <p className="text-sm text-[#CBE4DE]/50">Pickup Location</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {car.pickupLocation}
                </h3>
              </div>

              <div className="rounded-2xl border border-[#0E8388]/10 bg-[#2E4F4F] p-5">
                <FaCalendarAlt className="mb-3 text-2xl text-[#0E8388]" />
                <p className="text-sm text-[#CBE4DE]/50">Total Bookings</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {car.bookingCount || 0}+
                </h3>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* ✅ 2. Shudhu ei line ta replace korো — car pass korো */}
              <BookNowButton car={car} />

              <button className="rounded-xl border border-[#0E8388]/20 bg-[#2E4F4F] px-8 py-4 font-semibold text-[#CBE4DE] transition-all duration-300 hover:border-[#0E8388]">
                Add to Wishlist
              </button>
            </div>

            {/* Bottom Info */}
            <div className="mt-10 border-t border-[#0E8388]/10 pt-6 text-sm text-[#CBE4DE]/50">
              <p>
                Added by: <span className="text-[#0E8388]">{car.addedBy}</span>
              </p>
              <p className="mt-2">
                Added at: {new Date(car.addedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailPage;
