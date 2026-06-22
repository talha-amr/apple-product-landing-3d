import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const ANIMATION_TIME=1;
const OFFSET_DISTANCE=5;

const fadeMeshes=(group,opacity)=>{
  if (!group) return;
  group.traverse((child)=>{
    if(child.isMesh){
      child.material.transparent=true;
        gsap.to(child.material,{opacity,duration:ANIMATION_TIME})
  
  }
  })
}
const moveGroup=(group,x)=>{
    if(!group) return;
    gsap.to(group.position,{x,duration:ANIMATION_TIME})
}

const ModelSwitcher = ({scale}) => {
    const smallMacbookRef=useRef();
    const largeMacbookRef=useRef();
    const controlsConfig={
        snap:true,
        speed:2,
        zoom:1,
        polar:[-Math.PI,Math.PI],
        azimuth:[-Infinity,Infinity],
        config:{mass:1,friction:26,tension:170}
    }
    useGSAP(()=>{
      if(scale==0.08){
        moveGroup(smallMacbookRef.current,-OFFSET_DISTANCE);
        moveGroup(largeMacbookRef.current,0);

        fadeMeshes(smallMacbookRef.current,0);
        fadeMeshes(largeMacbookRef.current,1);
      } else {
        moveGroup(smallMacbookRef.current,0);
        moveGroup(largeMacbookRef.current,OFFSET_DISTANCE);

        fadeMeshes(smallMacbookRef.current,1);
        fadeMeshes(largeMacbookRef.current,0);
      }
    },[scale])

  return (
  
    <>
    <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <MacbookModel16  scale={0.08}></MacbookModel16>
        </group>
    </PresentationControls>
    <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
            <MacbookModel14  scale={0.06}></MacbookModel14>
        </group>
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher