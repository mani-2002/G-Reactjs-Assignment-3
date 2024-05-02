import React from "react";
import img2 from "../images/img2.jpeg";

function ProfileCard() {
  return (
    <div className="total">
      <div className="top">
      <div className="image_container">
          <img src={img2} alt="img2" />
          <div className="starr">
            <i class="fa-solid fa-star" id="str2"></i>
          </div>
        </div>
        <div className="txt1">Actor, Film Director</div>
        <div className="txt2">$9/hour</div>
      </div>
      <div className="down">
        <h3>Baltasar Kormakur, 52</h3>
        <p className="btm_txt2">
          <i class="fa-solid fa-location-dot" id="location"></i>Reykavik,
          Iceland
        </p>
        <h4>
          Iceland actor, theater and film director,
          <br />
          and film producer
        </h4>
        <div className="btns">
          <button id="btn1">VIEW CV</button>
          <button id="btn2">MAKE OFFER</button>
        </div>
        <div className="last">Last Seen :17 minutes ago</div>
      </div>
    </div>
  );
}

export default ProfileCard;
