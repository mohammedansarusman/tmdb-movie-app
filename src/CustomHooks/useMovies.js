import { API_OPTION, MOVIES_URL, PAGE } from "../Constants/apiKey";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../ReduxStore/moviesSlice";

//  Calling from <Browse />
const useMovies = () => {
  const sheetNo = useSelector((store) => store.movie.moviePage);

  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await fetch(MOVIES_URL + PAGE + sheetNo, API_OPTION);
    const data = await response.json();
    dispatch(addMovies(data));
  };
  // memoisation avoided purpesfully
  useEffect(() => {
    fetchMovies();
  }, [sheetNo]);
};

export default useMovies;
//  this custom hook wil call in Browse component.
