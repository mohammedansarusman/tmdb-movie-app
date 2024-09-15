// What is the purpose of this component. 
// if the user click any of the card ( movie, tv or people) then this component will execute.
// via useparams, developer can identify the media_type( movie,tv or people) is clicked 

import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsMovie from './DetailsMovie';

const Details = () => {
  const { session, id } = useParams();
  return (
    <div className='w-screen h-screen flex text-black justify-center items-center' >
      {session === "movie" ? <DetailsMovie movieId={id} /> :
        session === "tv" ? <h1>TV</h1> :
          session === "person" && <h1>Person</h1>
      }
    </div>
  )
}

export default Details;