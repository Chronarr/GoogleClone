import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBox from './SearchBox';
import { RxGear } from "react-icons/rx";
import { CgMenuGridO } from "react-icons/cg";
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
    return (
        <header className='sticky top-0 bg-white'>

            <div className='flex w-full p-6 items-center justify-between'>

                <Link href={"/"}>
                    <Image className='min-w-[92px]' src={"/googlelogo_color_160x56dp.png"} width="92" height="30"></Image>
                </Link>

                <div className='flex-1 justify-center items-center'>
                    <SearchBox />
                </div>
                <div className='hidden sm:flex space-x-1 ml-5'>
                    <RxGear className='header-icon' />
                    <CgMenuGridO className='header-icon' />
                    <button className='bg-blue-600 text-white text-sm px-6 py-2 font-medium rounded hover:brightness-105 hover:shadow-lg transition-all'>Sign in</button>
                </div>

            </div>
            <SearchHeaderOptions />
        </header >
    );
};
