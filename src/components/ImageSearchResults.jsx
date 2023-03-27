import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PageButtons from './PageButtons'

export default function ImageSearchResults({ results }) {
    let i = 0
    return (
        <div className='w-full min-w-[600px] pb-40 sm:pb-24 flex flex-wrap'>
            <p className='text-sm text-gray-400 mt-1 mb-5 w-full'>About {results.searchInformation?.formattedTotalResults} search results ({results.searchInformation?.formattedSearchTime} seconds) </p>
            {results.items?.map((result) => (
                
                <div className=' flex flex-col ml-6 mb-6 group w-[220px] h-[222px]'  key={i++}>
                    <Link href={result.image.contextLink}><div>
                        <div className='flex h-[180px] max-w-[364px] bg-gray-100 shadow-sm items-center justify-center rounded-xl overflow-hidden group-hover:shadow-[0px_0px_15px_rgba(187,187,187,0.8)]'>
                            <img src={result.link} className='max-h-full max-w-full'></img>
                        </div>
                        <div className='hover:underline'>
                            <div className='flex flex-row max-h-[12px] items-center mt-2 ml-1'>
                                <Image src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${result.displayLink}`} width="12" height="12" />
                                <p className='ml-1 text-xs line-clamp-1 '>{result.displayLink}</p>
                            </div>
                            <p  className=' text-sm line-clamp-1'> {result.title}</p>                     
                        </div>                     
                    </div>
                    
                    </Link>
                </div>
            ))}
                        <div className='flex w-full items-center justify-center'>
                        <PageButtons total={results.searchInformation.totalResults}/>
            </div>
        </div>
    )
}
