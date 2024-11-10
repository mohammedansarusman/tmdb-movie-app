import React from "react";
import { useEffect, useState } from "react";
import { throttle } from 'lodash';

const MovieShimmer = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const handleResize = throttle(() => {
            console.log("scrolling", window.innerWidth)
            window.innerWidth >= 500 && window.innerWidth < 600 ? setCount(10) :
                window.innerWidth >= 600 && window.innerWidth < 700 ? setCount(12) :
                    window.innerWidth >= 700 && window.innerWidth < 800 ? setCount(14) :
                        window.innerWidth >= 800 && window.innerWidth < 900 ? setCount(16) :
                            window.innerWidth >= 900 && window.innerWidth < 1000 ? setCount(18) :
                                setCount(20);
        })

        window.innerWidth >= 500 && window.innerWidth < 600
            ? setCount(10)
            : window.innerWidth >= 600 && window.innerWidth < 700
                ? setCount(12)
                : window.innerWidth >= 700 && window.innerWidth < 800
                    ? setCount(14)
                    : window.innerWidth >= 800 && window.innerWidth < 900
                        ? setCount(16)
                        : window.innerWidth >= 900 && window.innerWidth < 1000
                            ? setCount(18)
                            : setCount(20);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <div className="w-screen bg-gradient-to-br from-slate-900 to-gray-700 text-white relative py-20  flex flex-col">
            <div className='flex justify-center gap-1 lg:gap-3'>
                {Array.from({ length: count }).map(() => (
                    <div className="w-[50px] h-[75px] bg-gray-500 rounded-xl" key = {count}></div>
                ))}
            </div>
            <div className='w-screen h-[30px] px-5 bg-gray-500 mt-5'></div>
            <div className=' flex flex-wrap px-2 gap-5 justify-center mt-[70px]'>
                {Array.from({ length: 20 }).map(() => (
                    <div
                        className='overflow-hidden rounded-xl w-[150px] h-[225px] bg-slate-500
                                sm:w-[160px] sm:h-[235px]
                                md:w-[170px] md:h-[260px]
                                lg:w-[190px] lg:h-[270px]
                                xl:w-[230px] xl:h-[310px]'>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieShimmer;
