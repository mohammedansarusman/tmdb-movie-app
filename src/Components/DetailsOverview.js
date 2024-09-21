import React from 'react'
import { useState } from 'react';

const DetailsOverview = (props) => {
    const {data} = props
    const [line, setLine] = useState('line-clamp-1'); // state variable created to on/off the overview line
    const handleMore = () =>{
        setLine(null);
    }
    return (
        <div className='w-[90%] flex flex-col items-center'>
            <p className={`${line} font-light text-white text-center lg:text-xl`}>{data}</p>
            {
                line === 'line-clamp-1' &&
                <p className='text-orange-400 font-semibold cursor-pointer lg:hidden'
                    onClick={handleMore}
                >more..
                </p>
            }
            {line === null && <p className='text-orange-400 font-semibold cursor-pointer lg:hidden '
                onClick={() => setLine('line-clamp-1')}
            >less..
            </p>
            }
        </div>
    )
}

export default DetailsOverview