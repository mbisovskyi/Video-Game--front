import "./NavBar.css";
import navbarImg from "./assets/navbar.jpg";
import SearchGame from "../SearchGame/SearchGame";

const NavBar = (props) => {
  return (
    <div className="navbar-wrap">
      <img src={navbarImg} alt="banner" />
      <div className="navbar-logo">
        VideoGamer <span>Data</span>
      </div>
      <div className="searchgame-container">
        <SearchGame findGame={props.findGame} />
      </div>
    </div>
  );
};

export default NavBar;
