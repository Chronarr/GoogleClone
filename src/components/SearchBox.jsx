"use client"

import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx"
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function SearchBox() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("search");
    const [search, setSearch] = useState(searchTerm || "");

    function handleSubmit(e) {
        e.preventDefault();
        if (!search.trim()) return;
        router.push(`/search/web?search=${search}`)
    }

    return (
        <form className='flex w-full border shadow-lg border-gray-200 rounded-full h-12 items-center px-4 ml-4 flex-grow max-w-3xl min-w-[300px]' onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onSubmit={handleSubmit} className='outline-none w-full text-gray-700' />
            <RxCross1 className='text-xl cursor-pointer text-gray-400 mr-2 hidden sm:flex' onClick={() => setSearch("")} alt="X" />
            <BsFillMicFill className='cursor-pointer text-3xl pl-2 border-l-2 mr-2 border-gray-300 hidden sm:flex' alt="Mic" />
            <AiOutlineSearch className='cursor-pointer text-2xl' alt="Mag" onClick={handleSubmit} />
        </form>
    )
}
