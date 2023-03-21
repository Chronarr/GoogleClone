"use client"

import React from 'react'
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export default function SearchHeaderOptions() {

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    function selectTab(tab) {
        router.push(`/search/${tab}?search=${search}`);
        window.location.reload();
    }


    return (
        <div className=' flex border-b border-gray-400 space-x-2 pl-4 sm:pl-36 select-none'>
            <div className={`flex z-10 -mb-px items-center space-x-1 border-b-4 border-transparent active:text-blue-600 cursor-pointer pb-3 px-2 text-gray-500
                            ${pathname == "/search/web" && "!text-blue-600 !border-blue-600"}`} onClick={() => selectTab("web")}> <AiOutlineSearch className='text-md' /> <p>All</p></div>
            <div className={`flex z-10 -mb-px items-center space-x-1 border-b-4 border-transparent active:text-blue-600 cursor-pointer pb-3 px-2  text-gray-500
                            ${pathname == "/search/image" && "!text-blue-600 !border-blue-600"}`} onClick={() => selectTab("image")}> <AiOutlineCamera /> <p>Image</p></div>
        </div>
    )
}
