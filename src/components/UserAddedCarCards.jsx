"use client";

import { AlertDialog, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserAddedCarCards = ({ car, handleDelete }) => {
  return (
    <div className="group flex flex-col gap-5 rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] p-5 transition-all duration-300 hover:border-[#0E8388]/40 hover:bg-[#355b5b] md:flex-row md:items-center md:justify-between">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-5">
        {/* IMAGE */}
        <div className="relative h-24 w-32 overflow-hidden rounded-2xl bg-[#2C3333]">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-2xl font-bold text-[#CBE4DE]">{car.name}</h2>

          <p className="mt-1 text-[#CBE4DE]/60">{car.carType}</p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <p className="rounded-full bg-[#0E8388]/10 px-3 py-1 text-[#0E8388]">
              <span className="text-xl text-[#CBE4DE]">
                {" "}
                ${car.dailyRentPrice}
              </span>{" "}
              /day
            </p>

            <span className="text-[#CBE4DE]/50">{car.pickupLocation}</span>

            <span
              className={`font-medium ${
                car.availability === "available"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {car.availability}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-3">
        {/* EDIT */}
        <Link
          href={`/update-car/${car._id}`}
          className="flex items-center gap-2 rounded-xl border border-[#0E8388] px-5 py-3 text-sm font-medium text-[#0E8388] transition-all duration-300 hover:bg-[#0E8388] hover:text-white"
        >
          <FaEdit />
          Edit
        </Link>

        {/* DELETE */}
         <AlertDialog>

      {/* OPEN BUTTON */}
      <Button className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-red-600">

        <FaTrash />

        Delete
      </Button>

   {/* MODAL */}
<AlertDialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">

  <AlertDialog.Container className="fixed inset-0 flex items-center justify-center p-4">

    <AlertDialog.Dialog className="w-full max-w-md rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] p-6 shadow-2xl">

      {/* HEADER */}
      <AlertDialog.Header className="flex flex-col items-center text-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">

          <FaTrash className="text-4xl text-red-500" />

        </div>

        <AlertDialog.Heading className="mt-5 text-2xl font-bold text-[#CBE4DE]">
          Delete this listing?
        </AlertDialog.Heading>

      </AlertDialog.Header>

      {/* BODY */}
      <AlertDialog.Body className="mt-4 text-center text-[#CBE4DE]/60">
        This action cannot be undone.
      </AlertDialog.Body>

      {/* FOOTER */}
      <AlertDialog.Footer className="mt-8 flex gap-4">

        <Button
          slot="close"
          className="flex-1 rounded-xl border border-[#0E8388] bg-transparent py-3 text-[#0E8388]"
        >
          Cancel
        </Button>

        <Button
          slot="close"
          onClick={() => handleDelete(car._id)}
          className="flex-1 rounded-xl bg-red-500 py-3 text-white hover:bg-red-600"
        >
          Delete
        </Button>

      </AlertDialog.Footer>

    </AlertDialog.Dialog>

  </AlertDialog.Container>

</AlertDialog.Backdrop>

    </AlertDialog>
      </div>
    </div>
  );
};

export default UserAddedCarCards;
