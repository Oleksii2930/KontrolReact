import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {IMovie} from "../../Models/IMovie";

interface MovieState {
    movies: IMovie[];
    page:number;
}

const initialState: MovieState = {
    movies: [],
    page:1
};

export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (page:number = 1) => {
        const {data} = await movieService.getAll(page);
        return data;
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},

    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
            })
});

const {reducer: movieReducer} = movieSlice;

export {
    movieReducer
};