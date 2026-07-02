import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Highlights = () => {
  useGSAP(() => {
    const timeline= gsap.timeline({
      scrollTrigger:{
        trigger:'.masonry',
        start:'60% top',
      }
    })
    timeline.to('.left-column, .right-column',{y:0, opacity:1,duration:1,stagger:0.5,ease:'power1.inOut'});
  })
  return (
    <section id='highlights'>
      <h2>There's never been a better time to upgrade</h2>
      <h3>Here's what you get with a new macbook pro</h3>
      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="laptop" />
            <p>Fly through the demanding tasks 9.8x faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="sun" />
            <p>A stunning <br/> Liquid Retina XDR<br/> display.</p>
          </div>
        </div>
        <div className="right-column">
          <div className='apple-gradient'>
            <img src="/ai.png" alt="ai" />
            <p>Built For <br/> <span>Apple intelligence</span></p>
          </div>
          <div>
            <img src="/battery.png" alt="battery" />
            <p>Up to <span className='green-gradient'> {' '}14 more Hours {' '}</span> battery life <span className='text-dark-100'>{' '}(Upto to 24 Hours Total.)</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights