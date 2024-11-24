// What is the purpose of this component. 
// if the user click any of the card ( movie, tv or people) then this component will execute.
// via useparams, developer can identify the media_type( movie,tv or people) was clicked.

import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsMovie from './DetailsMovie';
import DetailsTv from './DetailsTv';
import DetailsPerson from './DetailsPerson';

const Details = () => {
  const { session, id } = useParams();
  return (
    <div >
      {session === "movie"  ? <DetailsMovie movieId={id} /> :
        session === "tv" ? <DetailsTv tvId = {id}/> :
          session === "person" && <DetailsPerson pId = {id}/>
      }
    </div>
  )
}
export default Details;
