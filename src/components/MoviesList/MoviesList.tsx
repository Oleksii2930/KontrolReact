import { FC } from "react";
import { IMovie } from "../../Models/IMovie";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

interface Props {
    movies: IMovie[];
}

const MoviesList: FC<Props> = ({ movies }) => {
    return (
        <div>
            {movies.map(movie => (
                <MoviesListCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MoviesList;