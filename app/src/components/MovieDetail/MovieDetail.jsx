"use client"
import { React, Suspense, useState } from 'react'
import Image from 'next/image'
import { useMoviesId } from '@/hooks/useMovies';
import { imagenes_URL } from "@/constants";

export default function MovieDetail(idMovie) {
  const movie = useMoviesId(idMovie.id);
  const [funciones, setFunciones] = useState([]);
  //console.log(movie)
  const genero = movie?.generos;
  console.log(genero)


  const backgroundStyle = {
    backgroundImage: `url(${imagenes_URL+movie?.imageBackground})`
  }
  return (
    <article className="h-[100vh]"  >
      <div className='absolute  w-[100%] top-0 left-0 max-h-[470px] h-[36%] '>
        <div className='h-[100%] w-[100%] bg-cover bg-no-repeat bg-center inset-0 transform -skew-y-3 origin-top-left' style={backgroundStyle} ></div>
      </div>
      <div className='movieDetailCard-body flex flex-col justify-center absolute sm:flex-row md:flex-row lg:flex-row sm:mt-[20%] md:mt-[17%] lg:mt-[13%] mt-[28%] gap-1 mx-7'>
        <div className='movieDetailCard-body_left flex justify-center relative gap-3 items-center flex-row md:justify-around sm:flex-col '>
          <button className='movieDetailCard-body_left_poster relative w-[40%] sm:w-[70%] md:w-[90%] lg:w-[100%] '>
            <Image className="rounded-md object-cover w-[100%]" src={imagenes_URL+ movie?.imageCartelera}
              alt={"dune"}
              width={200}
              height={100}
              style={{ boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.8)' }} />

          </button>

          <ul className='movieDetailCard-body_left_details  flex rounded-xl tracking-wider font-quicksand text-xs sm:text-sm md:text-base flex-col gap-5 px-[6%] bg-black/50 text-white py-10 sm:bg-white sm:text-black'>
            <li className='flex flex-col items-center '>
              <span className='font-[500] border border-white p-1 px-3 rounded-md sm:border-black'> {movie.fecha_estreno}</span>
            </li>
            <li className='flex flex-col items-center'>
              <span className='font-[500] border border-white p-1 px-3 rounded-md sm:border-black'>{movie.duracion}</span>
            </li>
            <li className='flex flex-col items-center'>
              <span className='font-[500] border border-white p-1 px-3 rounded-md sm:border-black'>{movie.clasificacionEdad}</span>
            </li>
          </ul>
        </div>

        <div className='movieDetailCard-body_right justify-center sm:mx-10  sm:w-[60%] sm:items-center'>
          <div className="movieDetailCard-body_right_top flex flex-col min-h-48 gap-8 justify-end">
            <div className='movieDetailCard-body_right_top_titles flex flex-col gap-2 rounded-lg bg-black/50 py-3 px-2 text-white'>
              <h1 className='text-lg xs:text-base sm:text-xl md:text-2xl lg:text-6xl font-[400] '>{movie.titulo}</h1>
              <h2 className='text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl font-[300] italic '>{movie.subTitulo}</h2>
            </div>

            <ul className='movieDetailCard-body_right_top_genres flex flex-wrap gap-3 tracking-wider'>
              {genero && (genero.map((data, i) => (
                <li key={i} className="badge badge-lg badge-primary text-[0.7rem] sm:text-xs md:text-sm lg:text-lg bg-red-700 text-white px-3 rounded-md content-center " >{data}</li>
              ))
              )
              }
            </ul>
          </div>

          <div className='flex flex-col  text-zinc-600'>
            <p className='tracking-wider flex flex-col mt-5 ml-2'>
              <span className='text-2xl xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold '>DESCRIPCIÓN GENERAL</span>
              <span className='text-base xs:text-xs sm:text-sm md:text-base lg:text-lg text-justify '>{movie.sinopsis}</span>
            </p>
            <p className='tracking-wider flex flex-col ml-2'>
              <span className='text-2xl xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold'>DIRECTOR</span>
              <span className='text-base xs:text-xs sm:text-sm md:text-base lg:text-lg text-justify'>{movie.director}</span>
            </p>
            <p className='tracking-wider flex flex-col ml-2'>
              <span className='text-2xl xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold'>ELENCO</span>
              <span className='text-base xs:text-xs sm:text-sm md:text-base lg:text-lg text-justify'>{movie.elenco}</span>
            </p>
          </div>


        </div>
      </div>
    </article>
  )
}
