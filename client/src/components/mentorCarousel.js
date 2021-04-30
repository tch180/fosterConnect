import React from "react";
import mentor1 from "../assets/mentoring.jpg";
import mentorHand from '../assets/20160704114059-shutterstock-390101425.jpeg'
function mentorCarousel() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mentor1} className="d-center w-80 h-50" data-bs-interval="100"alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={mentorHand} className="d-center w-80 h-50 "data-bs-interval="100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default mentorCarousel;
