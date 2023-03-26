export const dynamic = "force-dynamic"

import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react'

export default async function ImageSearchPage({ searchParams }) {
    const startIndex = searchParams.start || 1;
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY_GOOGLE}&cx=${process.env.CX_KEY}&q=${searchParams.search}&searchType=image&start=${startIndex}`)
    if (!response.ok) {
        throw new error("Something went wrong!")
    }
    const data = await response.json();
    const result = data.items;

    if (!result) {
        return <div className='flex flex-col items-center justify-center pt-10'>
            <h1 className='text-2xl'>No results found!</h1>
            <p className='mt-4'>Try searching for something else or check you spelling.</p>
            <Link href="/" className='bg-blue-600 px-4 py-2 text-white rounded-md mt-4 items-center flex justify-center'>Go back home?</Link >
        </div>
    }

    return (
        <>
            {result && <ImageSearchResults results={data} />}
        </>
    );
    
};
