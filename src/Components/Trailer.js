import React from 'react'
// callinfg from <DetailsMovie />

const Trailer = ({data}) => {
    return (
        <div className='w-[89%] sm:w-[70%] lg:w-[60%] xl:w-[50%]'>
            <iframe
                className='w-full aspect-video rounded-lg'
                src={"https://www.youtube.com/embed/" + data + "?autoplay=1&mute=1&controls=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Trailer