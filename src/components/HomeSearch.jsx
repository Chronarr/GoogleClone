"use client"
import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
    const [input, setInput] = useState("");
    const router = useRouter();
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?search=${input}`)
    }
    async function randomSearch(e) {
        e.preventDefault();
        setRandomSearchLoading(true);
        const randomWord = await fetch("https://random-word-api.herokuapp.com/word").then((res) => res.json()).then((data) => data[0]);
        if (!randomWord) return;
        router.push(`/search/web?search=${randomWord}`)
        setRandomSearchLoading(false);


    }
    return (
        <>
            <form className='flex w-full mt-5 mx-auto max-w-[90%] items-center justify-center border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow
                            focus-within:shadow-md sm:max-w-xl' onSubmit={handleSubmit}>
                <AiOutlineSearch onClick={handleSubmit} className='text-xl text-gray-400' />
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='flex-grow focus:outline-none px-3'></input>
                <BsFillMicFill className='text-xl text-gray-400' />
            </form>

            <div>
                <button onClick={handleSubmit} className='btn hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300'>Google search</button>
                <button disabled={randomSearchLoading} onClick={(!input.trim()) ? randomSearch : handleSubmit} className='btn disabled:opacity-80 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 ml-5'>{randomSearchLoading ? (<img src='/Eclipse-1s-194px.svg' alt='Loading...' className='h-2 max-h-3 text-center mx-auto' />) : ("I am feeling lucky")}</button>
            </div>
        </>
    )
}
