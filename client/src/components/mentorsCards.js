import React from "react";
import mentor2 from '../assets/mentor2.jpg'

function mentorsCards() {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
      <div class="card mt-5" style={{width:'22rem'}}>
        <img src={mentor2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Coaching</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="!#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card mt-5" style={{width:'22rem'}}>
        <img src={mentor2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Connect with a Mentor</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="!#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card mt-5" style={{width:'22rem'}}>
        <img src={mentor2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="!#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default mentorsCards;
