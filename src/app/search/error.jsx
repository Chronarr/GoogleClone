"use client"
import React, { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log("Error: ", error)
    }, [error]);
    return (
        <div className='flex flex-col items-center pt-10 justify-center'>
            <h1 className='text-2xl'>Something went wrong!</h1>
            <button onClick={() => reset()} className='rounded-md py-3 px-6 mt-6 items-center bg-blue-600 shadow-md text-white text-sm'>Try again?</button>
        </div>
    )
}
