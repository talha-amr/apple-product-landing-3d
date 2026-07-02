import React, { useEffect, useRef, useState } from 'react'

const Hero = ({ onVideoLoaded, isReady }) => {
    const videoRef = useRef();
    const [videoSrc, setVideoSrc] = useState(null);

    useEffect(() => {
        let objectUrl = null;

        const loadVideo = async () => {
            try {
                const response = await fetch('/videos/hero.mp4');
                const blob = await response.blob();
                objectUrl = URL.createObjectURL(blob);
                setVideoSrc(objectUrl);
                onVideoLoaded();
            } catch (error) {
                console.error("Failed to preload video:", error);
                setVideoSrc('/videos/hero.mp4');
                onVideoLoaded();
            }
        };

        loadVideo();

        return () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (isReady && videoRef.current && videoSrc) {
            videoRef.current.playbackRate = 3;
            // Delay playback to allow heavy Three.js shader compilation to finish
            // This prevents the video decoder from freezing during high CPU load
            const playTimeout = setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.play().catch(e => console.warn("Auto-play prevented", e));
                }
            }, 800); // Wait for the 0.8s opacity transition in App.jsx to finish
            
            return () => clearTimeout(playTimeout);
        }
    }, [isReady, videoSrc]);

    const handleVideoEnd = () => {
        // Some browsers skip the final frames at high playback rates.
        // Forcing the current time to the duration ensures the laptop is fully open.
        if (videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration;
        }
    };

  return (
    <section id='hero'>
        <div>
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="title" />
        </div>
        <video ref={videoRef} src={videoSrc || ""} playsInline muted onEnded={handleVideoEnd}></video>
        <button>Buy</button>
        <p>From $1599 or $133/month for 12 months</p>
    </section>
   
  )
}

export default Hero