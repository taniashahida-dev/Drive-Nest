import { Chip } from '@heroui/react';
import { Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CarCards = ({data}) => {
    console.log(data)
    const {_id,availability, name,image,carType,
dailyRentPrice}= data
    return (
        <div>
             <div
            className="group flex flex-col bg-[#2E4F4F] rounded-3xl border border-[#CBE4DE] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative aspect-16/10 overflow-hidden">
                <Image src={image}

                    alt="Course Image"
                    height={400}
                    width={640}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 p-2 rounded-4xl"
                />
                <div className="absolute top-3 right-3">
                    <Chip
                        size="sm"
                        color="primary"
                        variant="solid"
                        className="font-bold text-[10px] text-[#CBE4DE] uppercase"
                    >
                       {availability}
                    </Chip>
                </div>
            </div>
            <div className="p-5 flex flex-col grow space-y-3">
                <h4 className="font-bold line-clamp-2 text-[#CBE4DE] group-hover:text-[#0E8388] transition-colors">
                   {name}
                </h4>
 <div className="  font-bold text-[#0E8388]/60 group-hover:text-[#0E8388]">
                        {carType}
                    </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#2C3333]">
                   
                  <h1 className="font-black text-[#CBE4DE]">${dailyRentPrice}<span className='text-sm text-[#0E8388]/60'>/Day</span></h1>  
<Link href={`/explore/${_id}`}><button className=' text-[#CBE4DE] bg-[#0E8388]/60 p-2 px-4 md:px-5 rounded-4xl'>Details</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CarCards;