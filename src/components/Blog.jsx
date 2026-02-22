import React from 'react'
import { Construction } from 'lucide-react';

function Blog() {
    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-6rem)] relative bg-black text-white">

            <div className="text-center z-10 flex flex-col items-center animate-pulse">
                <Construction size={64} className="text-neutral-500 mb-8" />

                <h1 className="text-[12vw] sm:text-[15vw] font-display font-medium leading-none tracking-tight text-neutral-800">
                    COMING SOON
                </h1>

                <div className="mt-8 space-y-2">
                    <p className="text-neutral-400 font-sans tracking-[0.2em] text-sm sm:text-base uppercase">
                        THOUGHTS, INSIGHTS & EXPERIENCES
                    </p>
                    <p className="font-serif italic text-3xl sm:text-4xl text-white">
                        Under Construction
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Blog