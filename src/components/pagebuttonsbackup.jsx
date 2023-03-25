"use client"
import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight, HiOutlineMinusCircle } from "react-icons/hi"
import Link from 'next/link';


export default function PageButtons(total) {

  const pathname = usePathname();
  const search = useSearchParams();
  const searchTerm = search.get("search")
  const startIndex = +search.get("start") || 1;

  
  function pageButtons() {
    const buttons = [];
    for (let i = 0; i < 10; i++) {
      if(startIndex === i*10+1)
      buttons.push(
        <div className='flex flex-col px-0.5 items-center group text-black' key={i}>
          <HiOutlineMinusCircle className='h-5'/>
          <p className=' text-sm'>{i+1}</p>
        </div>
      );
      else {
      buttons.push(
        <Link href={`${pathname}?search=${searchTerm}&start=${i*10+1}`}>
          <div className='flex flex-col px-0.5 text-blue-600  items-center group' key={i}>
            <HiOutlineMinusCircle className='h-5'/>
            <p className='group-hover:underline text-sm'>{i+1}</p>
          </div>
        </Link>
      );}
    }
    return buttons;
  }
  
  return (
    <div className='flex pt-6 justify-between '>
      {startIndex >= 10 && (
        <Link href={`${pathname}?search=${searchTerm}&start=${startIndex - 10}`}>
          <div className='flex flex-col px-1 text-blue-600  items-end group'>
            <HiOutlineArrowCircleLeft className='h-5'/>
            <p className='group-hover:underline text-sm'>Previous</p>
          </div>
        </Link>
      ) }
      {startIndex === 1 && (
        
          <div className='flex flex-col px-1 text-black  items-end group'>
            <HiOutlineArrowCircleLeft className='h-5'/>
            <p className=' text-sm'>Previous</p>
          </div>

      ) }
       
        { pageButtons()
        }
      {startIndex <= 90 && (
        <Link href={`${pathname}?search=${searchTerm}&start=${startIndex + 10}`}>
          <div className='flex flex-col px-1 text-blue-600  items-start group'>
            <HiOutlineArrowCircleRight className='h-5'/>
            <p className='group-hover:underline text-sm'>Next</p>
          </div>
        </Link>
      ) }
            {startIndex === 91 && (
        
        <div className='flex flex-col px-1 text-black  items-start group'>
          <HiOutlineArrowCircleRight className='h-5'/>
          <p className=' text-sm'>Next</p>
        </div>

    ) }
    </div>
  )
}
