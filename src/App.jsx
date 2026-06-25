import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger,SplitText,gsap } from 'gsap/all'
import Showcase from './components/Showcase'
gsap.registerPlugin(ScrollTrigger,SplitText);
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase/>
    </>
  )
}

export default App
