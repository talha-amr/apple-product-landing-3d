import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef=useRef();
    useEffect(()=>{
        if (videoRef.current){
            videoRef.current.playbackRate=3;
        }
    },[])
  return (
    <section id='hero'>
        <div>
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" playsInline muted autoPlay ></video>
        <button>Buy</button>
        <p>From $1599 or $133/month for 12 months</p>
    </section>
   
  )
}

export default Hero