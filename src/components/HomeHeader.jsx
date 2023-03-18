import Link from 'next/link'
import React from 'react'
import { CgMenuGridO } from "react-icons/cg"

export default function HomeHeader() {
    return (
        <header className='flex justify-end p-5 text-sm'>
            <div className='flex space-x-4 items-center'>
                <Link className='hover:underline' href="/">Gmail</Link>
                <Link className='hover:underline' href="/">Images</Link>
                <CgMenuGridO className='text-4xl bg-transparent hover:bg-gray-300 rounded-full p-2' />
                <button className='bg-blue-600 text-white px-6 py-2 font-medium rounded hover:brightness-105 hover:shadow-lg '>Sign in</button>
            </div>
        </header>
    )
}
