import React from 'react'
import useDetailsTv from '../CustomHooks/useDetailsTv'
import { useSelector } from 'react-redux';

const DetailsTv = (props) => {
    const { tvId } = props;
    const results = useSelector(store=>store.movie.tvDetails)
    console.log("tv details",results)
    useDetailsTv(tvId)
    return (
        <div>DetailsTv</div>
    )
}

export default DetailsTv