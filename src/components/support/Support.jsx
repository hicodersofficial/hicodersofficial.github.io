import React from "react";
import "./support.scss";

function Support() {
  return (
    <div className="support" id="donate-support">
      <img
        src="/assets/support-donate.png"
        className="illu"
        data-aos="fade-right"
      />
      <div
      // data-aos="fade-left"
      >
        <h1>Support or donate</h1>
        <p>Feel free to support or donate.</p>
        <div className="merch">
          <img src="/assets/support-hoodie.png" />
          <img src="/assets/support-mug.png" />
          <img src="/assets/support-cover.png" />
        </div>
        <div className="donate">
          <div className="or">
            <div className="line"></div> <p className="or-text">or</p>{" "}
            <div className="line"></div>
          </div>
          <br />
          <button className="paypal">PayPal</button>
        </div>
      </div>
    </div>
  );
}

export default Support;
