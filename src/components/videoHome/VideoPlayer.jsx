import React from 'react';
import YouTube from 'react-youtube';
import styles from './video.module.css'

const VideoPlayer = () => {
    // Configuración del reproductor de YouTube
    const handleVideoEnd = (event) => {
        event.target.playVideo(); // Reiniciar el video cuando llegue al final
    };

    const containerStyle = {
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover', // Aplicar background-size: cover;
        transform: 'scale(1.6)',
        display: 'flex',
        position: 'relative',
    };

    const overlayTextStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#ffffff',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
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

    return (
        <div className={styles.containerAllvideo}>
            <YouTube className={styles.containerStyleVideo} videoId="HpOBXh02rVc" opts={opts} onEnd={handleVideoEnd} />
            <div className={styles.overlayTextStyle}>
                Texto superpuesto en el video
            </div>
        </div>
    );
};

export default VideoPlayer;