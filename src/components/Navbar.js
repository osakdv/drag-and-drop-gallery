import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({handFiltered, search, signinBtn, loginState}) => {
  const filterHandler = (name) => {
    handFiltered(name)
  }
  
  return (
    <div className="navbar">
      {/*  */}
      <div className="logo-and-links">
        {/* logo */}
        <Link to="/">
          <div className="main-logo">
            W<span>.</span>
          </div>
        </Link>
        

        {/* filterable links */}
        <ul>
          <li onClick={() => {filterHandler("All")}}>All</li>
          <li onClick={() => {filterHandler("Album")}}>Album</li>
          <li onClick={() => {filterHandler("Book")}}>Book</li>
          <li onClick={() => {filterHandler("Art")}}>Art</li>
          <li onClick={() => {filterHandler("Painting")}}>Painting</li>
          <li onClick={() => {filterHandler("Culture")}}>Culture</li>
        </ul>
      </div>

      <div className="search-and-signin">
        {/* seach icon */}
        <div className="search-field">
          <input type="text" name="" id="search-input" onChange={e => search(e.target.value.trim())}/>
          <label htmlFor="search-input">
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          </label>
        </div>

        {/* sigin */}
        <button onClick={() => !loginState ? signinBtn(false) : null}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
