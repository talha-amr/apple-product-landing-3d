import './App.css'
import React, { useState, useEffect } from 'react'
import { useProgress } from '@react-three/drei'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger,SplitText,gsap } from 'gsap/all'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const { progress, total, loaded } = useProgress();

  // It's ready when the hero video has fired onCanPlayThrough AND all 3D assets are loaded
  const isReady = heroLoaded && (loaded >= total && total > 0);

  // Prevent scrolling while loading
  useEffect(() => {
    if (!isReady) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isReady]);

  return (
    <>
      <LoadingScreen progress={progress} isReady={isReady} />
      <main style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
        <Navbar />
        <Hero onVideoLoaded={() => setHeroLoaded(true)} isReady={isReady} />
        <ProductViewer />
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
      </main>
    </>
  )
}

export default App
