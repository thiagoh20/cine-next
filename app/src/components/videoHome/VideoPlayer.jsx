"use client"
import { React, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import styles from './video.module.css'
import Link from 'next/link';
import { useUnaMovie } from '@/hooks/useMovies';

const VideoPlayer = () => {
    const movie = useUnaMovie();
   
    // Configuración del reproductor de YouTube
    const handleVideoEnd = (event) => {
        event.target.playVideo(); // Reiniciar el video cuando llegue al final
    };

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 1, // Reproducir automáticamente
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 0,
            quality: 'hd720',
            mute: 1,
            modestbranding: 1, // Modo de marca modesto
            iv_load_policy: 3, // No mostrar anotaciones
            fs: 0, // Ocultar el botón de pantalla completa
            cc_load_policy: 0, // Ocultar subtítulos cerrados
            disablekb: 1,
        },
    };

    const [tamanoVentana, settamanoVentana] = useState(0);
    const [mostrarElemento1, setMostrarElemento1] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            settamanoVentana(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        settamanoVentana(window.innerWidth);
        if (tamanoVentana <= 800) {
            setMostrarElemento1(true);
        } else {
            setMostrarElemento1(false);
        }
    }, [tamanoVentana]);

    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie[0]?.imageBackground})`

    }

    return (
        <div className={styles.containerAllvideo} style={backgroundStyle} >
            {mostrarElemento1 ? (
                <div className={styles.imgBody} />
            ) : (
                <YouTube className={styles.containerStyleVideo} videoId={movie[0]?.idvideo} opts={opts} onEnd={handleVideoEnd} />

            )}
            <Link href="/">
                <div className={styles.overlayTextStyle}>
                    <section className={styles.texto}>
                        <h1 className='text-5xl md:text-4xl mb-5'>{movie[0]?.titulo}</h1>
                        <h4 className='text-3xl md:text-8xl '> {movie[0]?.subTitulo}</h4>
                    </section>
                </div>
            </Link>

        </div>
    );
};

export default VideoPlayer;