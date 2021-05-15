import React from 'react'

import landingImage from '../assets/FosterNet.png'


function LandingPage() {
    
    return (
        <div >
              
          <img src={landingImage}  className="img-fluid" alt='connection pic'/>
          <div className="h-100 p-5 text-white bg-dark rounded-3 py-5">
          <h2>We inspire connections</h2>
          <p>Our mission is to connect foster kids around the country, not only with each other but with others that have been in their shoes to help mentor them<br/> 
          Our goal is to help foster children find meaningful connections with those that have been foster kids themselves </p>
          <button className="btn btn-outline-light" type="button" onClick={()=>{console.log("button clicked")}}>Learn More </button>
          </div>
            

          
        </div>
    )
}

export default LandingPage
