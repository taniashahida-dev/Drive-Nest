"use client";

import { useState } from "react";
import { X, Car, MapPin, Users, Calendar, Shield } from "lucide-react";

import { PostbookingData } from "@/lib/action";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


// ─── Modal Component ───────────────────────────────────────────────
function BookingModal({ car, isOpen, onClose }) {
  const [driverNeeded, setDriverNeeded] = useState(false);
  const [specialNote, setSpecialNote] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingDate, setBookingDate] =
  useState(
    new Date()
      .toISOString()
      .split("T")[0]
  );

   const { data: session} = useSession();
   const router = useRouter()
     
      const user = session?.user
//  console.log(user)

  if (!isOpen) return null;
 

 const handleBooking = async () => {

  setIsBooking(true);

  const bookingData = {
    carId: car._id,
    carName: car.name,
    carType: car.carType,
    dailyRentPrice: car.dailyRentPrice,
    driverNeeded,
    specialNote,
    bookingDate,
    userEmail: user?.email,
  };

  try {

    const postBooking =
      await PostbookingData(bookingData);

    if(postBooking?.acknowledged){
 toast.success("Booking Confirmed ✅");
      setSuccess(true);

      setTimeout(() => {

        onClose();

        router.push("/my-bookings");

      }, 1500);

    }

  } catch (error) {

   console.log(error);

  } finally {

    setIsBooking(false);

  }
};

  return (
    // Backdrop — clicking outside closes modal
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(20,30,30,0.88)" }}
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-md rounded-2xl p-6 shadow-2xl"
        style={{
          background: "#2E4F4F",
          border: "1px solid rgba(14,131,136,0.4)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[#CBE4DE]/40 transition hover:text-[#CBE4DE]"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#CBE4DE]">
            Confirm Your Booking
          </h2>
          <p className="mt-1 text-sm text-[#CBE4DE]/45">
            Review details and complete your reservation
          </p>
        </div>

        {/* Car Summary Card */}
        <div
          className="mb-5 flex items-center gap-3 rounded-xl p-4"
          style={{
            background: "#2C3333",
            border: "1px solid rgba(14,131,136,0.18)",
          }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0E8388]/15">
            <Car size={20} className="text-[#0E8388]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-bold text-[#CBE4DE]">{car.name}</p>
            <div className="mt-0.5 flex items-center gap-3 text-xs text-[#CBE4DE]/45">
              <span className="flex items-center gap-1">
                <MapPin size={10} />
                {car.pickupLocation}
              </span>
              <span className="flex items-center gap-1">
                <Users size={10} />
                {car.seatCapacity} Seats
              </span>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-lg font-bold text-[#0E8388]">
              ${car.dailyRentPrice}
            </p>
            <p className="text-xs text-[#CBE4DE]/35">per day</p>
          </div>
        </div>

        {/* Booking Date (auto) */}
        {/* <div className="mb-4">
          <label className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#CBE4DE]/45">
            <Calendar size={11} />
            Booking Date
          </label>
          <div
            className="rounded-xl px-4 py-3 text-sm font-medium text-[#CBE4DE]"
            style={{
              background: "#2C3333",
              border: "1px solid rgba(14,131,136,0.18)",
            }}
          >
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div> */}
<div className="mb-4">
  <label className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#CBE4DE]/45">
    <Calendar size={11} />
    Booking Date
  </label>

  <input
    type="date"
     value={bookingDate}
  onChange={(e) =>
    setBookingDate(e.target.value)
  }
      min={new Date().toISOString().split("T")[0]}
    className="w-full rounded-xl px-4 py-3 text-sm font-medium text-[#CBE4DE] outline-none"
    style={{
      background: "#2C3333",
      border: "1px solid rgba(14,131,136,0.18)",
      colorScheme: "dark",
    }}
  />
</div>
        {/* Driver Toggle */}
        <div className="mb-4">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#CBE4DE]/45">
            Do you need a driver?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setDriverNeeded(true)}
              className="rounded-xl py-2.5 text-sm font-semibold transition-all"
              style={
                driverNeeded
                  ? {
                      background: "rgba(14,131,136,0.18)",
                      border: "2px solid #0E8388",
                      color: "#CBE4DE",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid rgba(203,228,222,0.12)",
                      color: "rgba(203,228,222,0.45)",
                    }
              }
            >
              Yes, need a driver
            </button>
            <button
              onClick={() => setDriverNeeded(false)}
              className="rounded-xl py-2.5 text-sm font-semibold transition-all"
              style={
                !driverNeeded
                  ? {
                      background: "rgba(14,131,136,0.18)",
                      border: "2px solid #0E8388",
                      color: "#CBE4DE",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid rgba(203,228,222,0.12)",
                      color: "rgba(203,228,222,0.45)",
                    }
              }
            >
              No, I will drive
            </button>
          </div>
        </div>

        {/* Special Note */}
        <div className="mb-5">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#CBE4DE]/45">
            Special Note{" "}
            <span className="normal-case font-normal text-[#CBE4DE]/30">
              (optional)
            </span>
          </label>
          <textarea
            value={specialNote}
            onChange={(e) => setSpecialNote(e.target.value)}
            rows={3}
            placeholder="Any special requests or pickup instructions…"
            className="w-full resize-none rounded-xl px-4 py-3 text-sm text-[#CBE4DE] placeholder:text-[#CBE4DE]/30 outline-none transition-colors focus:border-[#0E8388]"
            style={{
              background: "#2C3333",
              border: "1px solid rgba(14,131,136,0.18)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0E8388")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(14,131,136,0.18)")
            }
          />
        </div>

        {/* Insurance Note */}
        <div
          className="mb-5 flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs text-[#CBE4DE]/55"
          style={{
            background: "rgba(14,131,136,0.08)",
            border: "1px solid rgba(14,131,136,0.18)",
          }}
        >
          <Shield size={12} className="shrink-0 text-[#0E8388]" />
          Full insurance included · Free cancellation up to 24h before pickup
        </div>

        {/* Confirm Button */}
        {success ? (
          <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E8388] py-4 text-sm font-bold text-[#2C3333]">
            ✓ Booking Confirmed!
          </div>
        ) : (
          <button
            onClick={handleBooking}
            disabled={isBooking}
            className="w-full rounded-xl py-4 text-sm font-bold text-[#2C3333] transition-all disabled:cursor-not-allowed disabled:opacity-60"
            style={{ background: "#0E8388" }}
          >
            {isBooking ? "Processing…" : "Confirm Booking →"}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Book Now Button (used inside CarDetailPage) ───────────────────
// This is the only thing CarDetailPage needs to import
export default function BookNowButton({ car }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="rounded-xl bg-[#0E8388] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#0c7478]"
      >
        Book Now
      </button>

      <BookingModal
        car={car}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}