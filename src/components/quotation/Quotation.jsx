import React from "react";
import "./quotation.scss";

function Quotation() {
  return (
    <div className="quotation">
      <div data-aos="fade-down-right">
        <h1>Favorite Quotes</h1>
        <p>
          <span className="list"></span> We live in a world constructed of code
          - and coders are the ones who built it for us.
        </p>
        <p>
          <span className="list"></span> Experience is the name everyone gives
          to their mistakes.
        </p>
        <p>
          <span className="list"></span> I'm not a great programmer; I'm just a
          good programmer with great habits.
        </p>
        <p>
          <span className="list"></span> Truth can only be found in one place:
          the code.
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img src="/assets/fav-quote.png" />
      </div>
    </div>
  );
}

export default Quotation;
