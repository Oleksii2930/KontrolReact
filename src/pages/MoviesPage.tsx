import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { movieActions } from "../../redux/slices/movieSlice";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {

    const dispatch = useAppDispatch();

    const movies = useAppSelector(
        state => state.movieStoreSlice.movies
    );

    useEffect(() => {
        dispatch(movieActions.getMovies());
    }, []);

    return (
        <div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default MoviesPage;