'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href , children}) => {
const path = usePathname()
const isActive = href==path
    return (
        <div>
            <Link href={href} className={`${isActive? 'text-[#0E8388]':''}  hover:text-[#0E8388] transition`}>{children}</Link>
        </div>
    );
};

export default Navlink;