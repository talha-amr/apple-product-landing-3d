import React, { useEffect, useRef } from 'react'

const Hero = ({ onVideoLoaded, isReady }) => {
    const videoRef=useRef();
    useEffect(()=>{
        if (videoRef.current){
            videoRef.current.playbackRate=3;
        }
    },[])

    useEffect(() => {
        if (isReady && videoRef.current) {
            // Only start playing the video once the loading screen is gone
            // Use setTimeout to ensure the fade-in animation has started
            setTimeout(() => {
                videoRef.current.play().catch(e => console.warn("Auto-play prevented", e));
            }, 100);
        }
    }, [isReady]);

  return (
    <section id='hero'>
        <div>
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" playsInline muted onCanPlayThrough={onVideoLoaded}></video>
        <button>Buy</button>
        <p>From $1599 or $133/month for 12 months</p>
    </section>
   
  )
}

export default Hero