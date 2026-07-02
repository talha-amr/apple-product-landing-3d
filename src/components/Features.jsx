import { Canvas } from '@react-three/fiber'
import React, { Suspense,useEffect,useRef } from 'react'
import { Html } from '@react-three/drei'
import StudioLights from './three/StudioLights'
import { AmbientLight } from 'three'
import { features, featureSequence } from '../constants'
import MacbookModel from './models/Macbook'
import { useProduct } from '../context/ProductContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CameraRig from './three/CameraRig'
const ModelScroll=()=>{
    const groupRef=useRef(null);
    const {texture,setTexture}= useProduct();
    //preloading all videos 
    useEffect(()=>{
        featureSequence.forEach((feature)=>{
            const v =document.createElement("video");
            Object.assign(v,{
                src:feature.videoPath,
                muted:true,
                playsInline:true,
                preload:"auto",
                crossOrigin:"anonymous"
            });
            v.load();
        })
    },[])
    useGSAP(()=>{
        const modelTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:"#f-canvas",
                start:"top top",
                end:"bottom top",
                scrub:1,
                pin:true
            }
        });
        const Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#f-canvas",
                start: "top center",
                end: "bottom top",
                scrub: 1,
            }
        })
        if(groupRef.current){
            modelTimeline.to(groupRef.current.rotation,{
                y:Math.PI*2,
                ease:"power1.inOut"
            });
        }
        Timeline.call(()=>setTexture('/videos/feature-1.mp4')).to(".box1",{opacity:1,y:0,delay:1});
        Timeline.call(()=>setTexture('/videos/feature-2.mp4')).to(".box2",{opacity:1,y:0,});
        Timeline.call(()=>setTexture('/videos/feature-3.mp4')).to(".box3",{opacity:1,y:0,});
        Timeline.call(()=>setTexture('/videos/feature-4.mp4')).to(".box4",{opacity:1,y:0,});
        Timeline.call(()=>setTexture('/videos/feature-5.mp4')).to(".box5",{opacity:1,y:0,});
        
    },[]);
    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h2 className='text-3xl uppercase'>Loading...</h2></Html>}>
                <MacbookModel scale={0.08} position={[0,-1,0]}/>
            </Suspense>
        </group>
    )
}

const Features = () => {
  return (
    <section id='features'>
        <h2>See it all in a new light.</h2>
        <Canvas id='f-canvas'>
            <StudioLights/>
            <ambientLight intensity={10}/>
             <CameraRig position={[0, 2, 5]} target={[0, 0, 0]} />
            
            <ModelScroll/>
        </Canvas>
        <div className="absolute inset-0">
            {features.map((feature,i)=>(
                <div key={feature.id} className={`box box${i+1} ${feature.styles}`}>
                    <img src={feature.icon} alt="" />
                    <p>
                        <span className='text-white'>{feature.highlight}</span>
                        {feature.text}
                    </p>

                </div>
            ))}
        </div>
    </section>
)
}

export default Features