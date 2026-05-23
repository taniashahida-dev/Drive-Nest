import { getAvailableCars } from "@/lib/action";
import CarCards from "./CarCards";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const AvailableCars = async () => {
  const cars = await getAvailableCars();
//   console.log(cars);
  return (
    <div className="overflow-hidden  py-4 md:py-10 px-6 lg:px-16">
<div className="mx-auto w-11/12 md:w-10/12">
    
     <div className="flex flex-col md:flex-row my-10 space-y-3 md:justify-between items-center">
         <h2 className=" text-4xl font-bold text-[#CBE4DE]">
       Available <span className="text-[#0E8388]">
          Cars
          </span>
      </h2>
     <Link href={'/explore'}> <p className="text-[#0E8388] cursor-pointer text-xl flex items-center gap-1 hover:text-[#2E4F4F] ">See All <span><FaArrowRight /></span> </p></Link>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-4 md:mt-8">{
        cars.map(car => <CarCards key={car._id} data={car}></CarCards> )
        }</div>
</div>
    </div>
  );
};

export default AvailableCars;
