import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (page:number = 1) =>
        apiService.get(urls.movies,{
            params:{
                page
            }
        })
};

export {
    movieService
};