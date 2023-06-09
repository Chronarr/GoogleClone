import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className=' flex flex-col items-center mt-36'>
        <Image width="300" height="100" src="/googlelogo_color_160x56dp.png"></Image>

        <HomeSearch />
      </div>
    </>
  )
}
