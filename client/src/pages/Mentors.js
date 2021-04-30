import React from "react";
import mentor1 from "../assets/mentoring.jpg";
import MentorCarousel from "../components/mentorCarousel";
import MentorsCards from "../components/mentorsCards";

function Mentors() {
  return (
    <div>
      <div className="card " style={{ backgroundColor: "black" }}>
        <figure class="figure">
          <img
            src={mentor1}
            class="figure-img img-fluid rounded mt-5"
            alt="..."
          />
          <figcaption class="figure-caption text-middle">
            Connecting you with others that have been in shoes just like yours
          </figcaption>
        </figure>
        <MentorsCards/>
        <MentorCarousel/>
      </div>
    </div>
  );
}

export default Mentors;
