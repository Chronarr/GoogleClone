import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WebSearchResults({ results }) {

    return (
        <div className=' px-4 sm:pl-36 sm:pr-48 w-full min-w-[600px] pb-10 flex flex-col'>
            <p className='text-sm text-gray-400 mt-1 mb-5'>About {results.searchInformation?.formattedTotalResults} search results ({results.searchInformation?.formattedSearchTime} seconds) </p>
            {results.items?.map((result) => (

                <div className='max-w-3xl my-4 mb-4' key={result.title}>
                    <div className='group' >
                        <div className='flex'>
                            <div className='h-8 w-8 bg-gray-100 rounded-full items-center justify-center flex mr-4' ><Link href={`${result.link}`}><Image height="20" width="20" src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${result.displayLink}`} alt="o" /></Link></div>
                            <div>
                                <Link href={`${result.link}`} className='text-xs line-clamp-1'>{result.displayLink.replace("www.", "")}</Link>
                                <Link href={`${result.link}`} className='text-xs line-clamp-1 '>{result.link}</Link>
                            </div>
                        </div>
                        <div>
                            <Link className='text-xl line-clamp-1 text-blue-900 visited:text-purple-700 group-hover:underline' href={`${result.link}`}>{result.title}</Link>
                        </div>

                    </div>
                    <p>{result.snippet}</p>
                </div>
            ))}
        </div>
    )
}
