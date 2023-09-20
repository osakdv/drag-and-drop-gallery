import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
          <li>Culture</li>
          <li>Culture</li>
          <li>Culture</li>
          <li>Culture</li>
        </ul>
      </div>

      <div className="search-and-signin">
        {/* seach icon */}
        <div className="search-field">
          <input type="text" name="" id="search-input" />
          <label htmlFor="search-input">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </label>
        </div>

        {/* sigin */}
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
