"use client"
import { React } from 'react'
import Image from 'next/image'
import dune from '@/images/duneee.png'

export default function CardMovie() {


    return (
        <div className="md:w-[80%] lg:w-[80%]">
            <Image className=" ml-[0%] md:ml-[13%] rounded-md transition-transform duration-300 hover:scale-105 object-cover" src={dune}
                alt={"dune"}
                width={1000}
                height={760}
                style={{ boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.8)' }} />
        </div>

    )
}
