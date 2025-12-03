import React from 'react'

const AboutUs = () => {
  return (
    <div className='aboutPage'>
     
     <div className='firstAboutVideoDiv'>
      <div className="firstVideo">
      <video autoPlay muted loop>
        <source  src='lifeStyle.mp4' type='video/mp4'/>
      </video>
      </div>
      <div className='firstAboutVideoDiv2ndPart'>
        <h1 className='AboutPage1stDivheading'><b>What is Nothing?</b></h1>
        <p>Célvare is not fashion. It is memory, inheritance, and quiet power stitched into cloth.

Born from a philosophy where less is more and subtle speaks louder than status, every piece is handpicked for those who move through the world without needing to explain themselves.

We don’t follow seasons.
We honour lineage, detail, and restraint.

Worn not to impress, but to belong to a world of timeless taste.

Explore Our Timeless Pieces →</p>
      </div>
     </div>

     <div className='AboutPage2ndPart'>
      <div className='AboutPage2ndPart1'>
      <h1 className='AboutPage2ndPart1Heading'><b>Our Philosophy</b></h1>
      <p>At Célvare, we do not follow trends.

We honour tradition, precision, and the kind of beauty that doesn’t beg for attention.
Our mission is to offer garments that do more than dress, they embody presence.

Each piece is a quiet assertion of taste: understated, enduring, and deeply intentional.

From the cut of a collar to the drape of a sleeve, nothing is accidental.

Everything speaks — softly, but with weight.

Because true elegance whispers.

And those who know, listen.</p>
</div>
<div className="AboutPage2ndPart2">
  
</div>
     </div>
    </div>
  )
}

export default AboutUs
