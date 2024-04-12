import { React } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imagenes_URL } from "@/constants";

export default function CardMovie(data) {
   // console.log(data)

    return (
        <Link href={`/detailMovie/${data.data._id}`}>
            <div className="relative p-[1%] justify-center content-center">
                <Image className="rounded-md transition-transform duration-300 hover:scale-105 object-cover" src={imagenes_URL+data?.data?.imageCartelera}
                    alt={data.data.titulo}
                    width={200}
                    height={100}
                    style={{ boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.8)' }}
                    priority={true} />
            </div>
        </Link>


    )
}
