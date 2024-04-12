'use client'
import { React, Suspense } from 'react'
import CardMovie from './CardMovies'
import { useMovies } from '@/hooks/useMovies';

export function Movies() {
  const  {movies}  =  useMovies();
 // console.log(movies)
  return (
    <div className='box-content place-items-center'>
      <div className="grid grid-cols-2 gap-9 w-[100%] -mt-20  sm:grid-cols-3   md:grid-cols-4 lg:grid-cols-6 px-8 pb-10 md:px-8 lg:px-14 ">
        {
          movies?.map((data, i) => (
            <CardMovie key={i} data={data} />
          ))
        }
      </div>
    </div>



  )
}
