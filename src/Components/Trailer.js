import React from 'react'

const Trailer = ({data}) => {
    console.log(data)
    return (
        <div className='w-[89%] sm:w-[70%] lg:w-[60%] xl:w-[50%]'>
            <iframe
                className='w-full aspect-video rounded-lg'
                src={"https://www.youtube.com/embed/" + data + "?autoplay=1&mute=1&controls=1"}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Trailer