"use client"
import { React } from 'react'
import CardMovie from './CardMovies'

export default function Movies() {


    return (
        <div className="-mt-20 absolute grid grid-cols-2 gap-9  md:grid-cols-3 lg:grid-cols-5 mr-10 ml-10  pb-20">
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>

        </div>
    )
}
