"use client"
import { React, Suspense } from 'react'
import Image from 'next/image'
import dune from '@/images/duneee.png'


export default function MovieDetail() {

 
  const backdropPath = 'https://i.blogs.es/dfa923/dune-xataka/1366_2000.jpeg';
  const backgroundStyle = {
      backgroundImage: `url(${backdropPath})`
  }
  return (
    <article className="relative  h-[100vh]"  >
      <div className='absolute  w-[100%] top-0 left-0 max-h-[470px] h-[40%] '>
        <div className='h-[100%] w-[100%] bg-cover bg-no-repeat bg-center inset-0 transform -skew-y-2 origin-top-left' style={backgroundStyle} ></div>
      </div>
      <div className='movieDetailCard-body flex flex-col absolute sm:flex-row md:flex-row lg:flex-row sm:mt-20%] md:mt-[20%] lg:mt-[14%] mt-[30%] gap-10 mx-6'>
        <div className='movieDetailCard-body_left flex relative gap-10 items-center flex-row md:justify-around sm:flex-col '>
          <button className='movieDetailCard-body_left_poster relative sm:w-[60%] md:w-[70%] lg:w-[80%] w-[80%]'>
            <Image className="rounded-md object-cover w-[100%]" src={dune}
              alt={"dune"}
              width={200}
              height={100}
              style={{ boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.8)' }} />

          </button>

          <ul className='movieDetailCard-body_left_details flex justify-center rounded-xl tracking-wider font-quicksand text-xs sm:text-sm md:text-base'>
            <li>
              <span className='underline  font-semibold'>Fecha de estreno</span>
              <span className='font-[500]'> 4/1/2024</span>
            </li>
            <li>
              <span className='underline font-semibold'>Duración</span>
              <span className='font-[500]'>95 Minutos</span>
            </li>
          </ul>
        </div>

        <div className='movieDetailCard-body_right   w-[60%] sm:items-center'>
          <div className="movieDetailCard-body_right_top flex flex-col min-h-48 gap-8 justify-end">
            <div className='movieDetailCard-body_right_top_titles flex flex-col gap-2 rounded-lg bg-black/50 py-3 px-2 '>
              <h1 className='text-lg xs:text-base sm:text-xl md:text-2xl lg:text-6xl font-[400] text-white'>DUNE</h1>
              <h2 className='text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl font-[300] italic text-white'>PARTE DOS</h2>
            </div>

            <ul className='movieDetailCard-body_right_top_genres flex flex-wrap gap-3 tracking-wider'>
              <li className="badge badge-lg badge-primary text-[0.7rem] sm:text-xs md:text-sm lg:text-lg bg-red-700 text-white px-3 rounded-md content-center ">Accion</li>
              <li className="badge badge-lg badge-primary text-[0.7rem] sm:text-xs md:text-sm lg:text-lg bg-red-700 text-white px-3 rounded-md content-center">Aventura</li>
            </ul>
          </div>


          <p className='tracking-wider flex flex-col gap-2 min-h-[200px] mt-5 ml-2'>
            <span className='text-2xl xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl '>Sinopsis</span>
            <span className='text-base xs:text-xs sm:text-sm md:text-base lg:text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, laborum laboriosam similique magnam ipsum consequatur, dolores odio officiis voluptates maiores repellat fugit provident reprehenderit necessitatibus dolorem temporibus quos cupiditate ea.</span>
          </p>

        </div>
      </div>
    </article>
  )
}
