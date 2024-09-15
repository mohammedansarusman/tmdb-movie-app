import React from 'react'
import useDetailsMovie from '../CustomHooks/useDetailsMovie';

const DetailsMovie = (props) => {
    console.log("props", props)
    const {movieId } = props;
    useDetailsMovie(movieId);

    return (
        <div>DetailsMovie</div>
    )
}

export default DetailsMovie