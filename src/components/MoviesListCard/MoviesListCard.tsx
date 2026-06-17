import { FC } from "react";
import { IMovie } from "../../Models/IMovie";

interface Props {
    movie: IMovie;
}

const MoviesListCard: FC<Props> = ({ movie }) => {
    return (
        <div>
            <h3>{movie.title}</h3>

            <p>{movie.release_date}</p>

            <p>⭐ {movie.vote_average}</p>

            <p>{movie.overview}</p>
        </div>
    );
};

export default MoviesListCard;