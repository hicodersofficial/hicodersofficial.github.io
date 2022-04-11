import Logo from "../utils/Logo";
import "./nav.scss";
function Nav() {
  document.onscroll = () => {
    if (window.pageYOffset < 90) {
      document.querySelector(".nav").style.background = "transparent";
    } else {
      document.querySelector(".nav").style.background = "#151d33ab";
    }
  };
  return (
    <nav className="nav">
      <Logo />
      <ul>
        <li>
          <a href="#root">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#connect">Contact</a>
        </li>
        <li>
          <a href="#donate-support">Support</a>
        </li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default Nav;
