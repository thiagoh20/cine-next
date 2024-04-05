"use client"
import { React } from 'react'
import Image from 'next/image'
import dune from '@/images/duneee.png'
import Link from 'next/link'
export default function CardMovie(data) {
    console.log(data)

    return (
        <Link  href='/detailMovie'>
            <div className="absolute p-[1%] justify-center content-center">
                <Image className="rounded-md transition-transform duration-300 hover:scale-105 object-cover" src={dune}
                    alt={data.data.Titulo}
                    width={200}
                    height={100}
                    style={{ boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.8)' }} />
            </div>
        </Link>


    )
}
