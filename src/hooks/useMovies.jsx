import { useEffect, useState } from "react";
import axios from "@/utils/axios";

export function useMovies() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        getDataMovie();
    }, [])

    const getDataMovie = () => {
        return axios
            .get(`/movies`)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((error) => {
                console.error(error);
                alert(error?.response?.data?.message || error.message);
                // reject(error?.response?.data?.message || error.message);
            });

    };

    return movie
}

export function useMoviesId(id) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        getMovieId(id);
    }, [id])

    const getMovieId = (id) => {
        return new Promise((resolve, reject) => {
            axios
                .get(`/movies/${id}`)
                .then((res) => {
                    setMovie(res.data);
                    resolve(true)
                })
                .catch((error) => {
                    console.error(error);
                    alert(error?.response?.data?.message || error.message);
                    // reject(error?.response?.data?.message || error.message);
                });
        });
    }
    return movie
}