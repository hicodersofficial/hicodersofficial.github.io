import React from "react";
import Header from "../header/Header";
import Insta from "../creator/Insta";
import About from "../about/About";
import Quotation from "../quotation/Quotation";
import Contact from "../contact/Contact";
import Social from "../social/Social";
import Support from "../support/Support";

function Home() {
  return (
    <div>
      <Header />
      <Insta />
      <About />
      <Quotation />
      <Contact />
      <Social />
      <Support />
    </div>
  );
}

export default Home;
