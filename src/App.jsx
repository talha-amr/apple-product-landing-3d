import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger,SplitText,gsap } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText);
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ProductViewer />
    </>
  )
}

export default App
