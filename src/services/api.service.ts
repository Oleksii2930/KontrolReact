import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create({
    baseURL,
    headers: {
        Authorization:
            'Bearer ТУТ_СВІЙ_TMDB_TOKEN',
    },
});

export {
    apiService
};


