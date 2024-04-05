import { useEffect, useState } from "react";
import axios from "@/utils/axios";

export function useMovies() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        getDataMovie();
    }, [])

    const getDataMovie = async () => {
        return new Promise((resolve, reject) => {
            axios
                .get(`/movies/`)
                .then((res) => {
                    setMovie(res.data);
                    resolve(true);
                })
                .catch((error) => {
                    console.error(error);
                    alert(error?.response?.data?.message || error.message);
                    reject(error?.response?.data?.message || error.message);
                });
        });
    };
    return movie
}