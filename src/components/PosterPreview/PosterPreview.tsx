import { FC } from "react";

interface Props {
    posterPath: string;
}

const PosterPreview: FC<Props> = ({ posterPath }) => {

    const imageUrl =
        `https://image.tmdb.org/t/p/w500${posterPath}`;

    return (
        <img
            src={imageUrl}
            alt="poster"
            width={200}
        />
    );
};

export default PosterPreview;