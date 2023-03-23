"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
    const pathname = usePathname();
    console.log(pathname)
    function path() {
        if (pathname === "/") {
            return "bottom-0";
        }
        else {
            return "-bottom-89px";
        }
    }
    return (
        <footer className={`absolute ${path()} text-sm text-gray-500 bg-gray-100 w-full`}>
            <div className=' border-b px-8 py-3 '>
                <CountryLookup />
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
                <ul className='flex items-center space-x-6'>
                    <li className='link'>About</li>
                    <li className='link'>Advertising</li>
                    <li className='link'>Business</li>
                    <li className='link'>How search works</li>
                </ul>
                <ul className='flex items-center space-x-6'>
                    <li className='link'>Privacy</li>
                    <li className='link'>Terms</li>
                    <li className='link'>Settings</li>
                </ul>
            </div>
        </footer>
    )
}
