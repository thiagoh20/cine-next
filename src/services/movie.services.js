import axios from "@/utils/axios";

export function  getMoviesDetails(){
    return axios.get(`${BACKEND_URL}/movies/`).then(res =>res.data);
};