import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadMovies } from "../redux/slices/movieSlice";
import MoviesList from "../components/MoviesList/MoviesList";

const MoviesPage = () => {
    const dispatch = useAppDispatch();

    const { movies } = useAppSelector(
        state => state.movieStoreSlice
    );

    useEffect(() => {
        dispatch(loadMovies(1));
    }, [dispatch]);

    return (
        <div>
            <MoviesList movies={movies} />
        </div>
    );
};

export default MoviesPage;