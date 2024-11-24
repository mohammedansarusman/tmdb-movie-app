import useProviders from "../CustomHooks/useProviders";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../Constants/apiKey";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { throttle } from "lodash";
import MovieShimmer from "./MovieShimmer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../index.css";

// Calling from <Movies /> and <Television />

const ProvidersMovie = () => {
  useProviders();
  const providers_data = useSelector((store) => store.movie.providers);
  const { results } = providers_data;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleResize = throttle(() => {
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
    });
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
    };
  }, []);

  if (providers_data === "") return <MovieShimmer />;

  return (
    <div
      className="w-screen h-[100px] flex  mb-5 justify-center items-center 
                        sm:py-1 xl:mb-20
        "
    >
      <div className="w-[90%] h-[50%]">
        <Swiper
          modules={[Navigation, Pagination, A11y, Scrollbar]}
          spaceBetween={10}
          slidesPerView={count}
          slidesPerGroup={count}
          speed={1500}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {results.map((pro) => (
            <SwiperSlide key={pro.provider_id}>
              <div className="">
                <img
                  src={POSTER_URL + pro.logo_path}
                  alt="pic"
                  key={pro.provider_id}
                  className="w-[50px] rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProvidersMovie;
