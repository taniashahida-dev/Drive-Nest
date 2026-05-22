import CarCards from "@/components/CarCards";
import { getAllCars } from "@/lib/action";


const page = async() => {
    const cars =await getAllCars()
    // console.log(cars)
    return (
        <div className="overflow-hidden  py-4 md:py-10 px-6 lg:px-16">
            <div className="mx-auto w-11/12 md:w-10/12">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-4 md:mt-20">{
        cars.map(car => <CarCards key={car._id} data={car}></CarCards> )
        }</div>
            
        </div>
        </div>
    );
};

export default page;