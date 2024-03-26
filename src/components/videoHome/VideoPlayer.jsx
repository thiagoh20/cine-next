"use client"
import { React, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import styles from './video.module.css'
import Link from 'next/link';

const VideoPlayer = () => {
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

    const [tamañoVentana, setTamañoVentana] = useState(0);
    const [mostrarElemento1, setMostrarElemento1] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setTamañoVentana(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setTamañoVentana(window.innerWidth);
        if (tamañoVentana <= 800) {
            setMostrarElemento1(true);
        } else {
            setMostrarElemento1(false);
        }
    }, [tamañoVentana]);

    const backgroundStyle = {
        backgroundImage: `url(https://indy-systems.imgix.net/zwul8nkl2274niufykt52zd3xmy4?fit=crop&w=400&h=600&fm=jpeg&auto=format)`,

    }

    return (
        <div className={styles.containerAllvideo} style={backgroundStyle} >
            {mostrarElemento1 ? (
                <div className={styles.imgBody} />
            ) : (
                <YouTube className={styles.containerStyleVideo} videoId="n9xhJrPXop4" opts={opts} onEnd={handleVideoEnd} />
            )}
            <Link href="/">
                <div className={styles.overlayTextStyle}>
                    <section className={styles.texto}>
                        <h1 className='text-7xl md:text-4xl'>DUNE</h1>
                        <h4 className='text-3xl md:text-8xl '> PARTE DOS </h4>
                        
                    </section>
                </div>
            </Link>

        </div>
    );
};

export default VideoPlayer;