import React from "react";
import img1 from "../images/img1.jpeg";

function ProfileCard1() {
  return (
    <div className="total">
      <div className="top">
        <div className="image_container">
          <img src={img1} alt="img1" />
          <div className="starr">
            <i class="fa-solid fa-star" id="str1"></i>
          </div>
        </div>
        <div className="txt1">Film Director, Producer</div>
        <div className="txt2">$14/hour</div>
      </div>
      <div className="down">
        <h3>Jeffrey Abhrams, 51</h3>
        <p className="btm_txt2">
          <i class="fa-solid fa-location-dot" id="location"></i>New York, United
          states
        </p>
        <h4>
          Abhrams was born in New York City and <br />
          raised in Los Angeles
        </h4>
        <div className="btns">
          <button id="btn1">VIEW CV</button>
          <button id="btn2">MAKE OFFER</button>
        </div>
        <div className="last">
          <i class="fa-solid fa-circle fa-2xs" id="online"></i>Online
        </div>
      </div>
    </div>
  );
}

export default ProfileCard1;
