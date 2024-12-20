// Parent component  - <MovieHome /> <TvHome /> <PeopleHome />
import React from "react";
import { POSTER_URL, NO_IMAGE } from "../Constants/apiKey";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = (props) => {
  const { title, poster_path, original_name, profile_path } = props.film;
  return (
    <div
      className="rounded-t-xl
    "
    >
      <div
        className="overflow-hidden rounded-xl w-[150px] h-[225px]
                      sm:w-[160px] sm:h-[235px]
                      md:w-[170px] md:h-[260px]
                      lg:w-[190px] lg:h-[270px]
                      xl:w-[200px] xl:h-[280px]"
      >
        {poster_path || profile_path ? (
          <LazyLoadImage
            src={POSTER_URL + (poster_path || profile_path)}
            alt="movie poster"
            className="rounded-xl hover:scale-105 transition-transform duration-600 w-[100%] h-[100%]"
          />
        ) : (
          <img
            src={NO_IMAGE}
            alt="movie poster"
            className="rounded-xl hover:scale-105 transition-transform duration-300 w-[100%] h-[100%]"
          />
        )}
      </div>
      <div className="text-white flex items-center text-md font-semibold w-[150px] h-[30px] ">
        <h1 className="truncate">
          {/* Here the title is using MovieHome and original_name  is using in TvHome */}
          {title || original_name}
        </h1>
      </div>
    </div>
  );
};
export default MovieCard;
