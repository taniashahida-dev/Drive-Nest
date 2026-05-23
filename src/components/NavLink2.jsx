'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink2 = ({ href, children }) => {

  const path = usePathname()

  const isActive = href == path

  return (
    <div className="w-full">

      <Link
        href={href}
        className={`
          ${isActive
            ? 'text-[#0E8388] bg-[#CBE4DE]'
            : 'text-[#CBE4DE]'
          }

          block w-full
          rounded-3xl
          border border-[#CBE4DE]
          px-4 py-2
          text-center text-lg
          transition-all duration-300
          hover:bg-[#CBE4DE]
          hover:text-[#0E8388]
          my-2
        `}
      >
        {children}
      </Link>

    </div>
  );
};

export default Navlink2;