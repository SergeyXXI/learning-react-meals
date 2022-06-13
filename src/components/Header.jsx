import { Link } from "react-router-dom"

const Header = () =>
(
    <nav className="header green darken-1">
        <div className="nav-wrapper">
            <Link to="/">React Meals</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="about">About</Link>
                </li> 
                <li>
                    <Link to="contact">Contact</Link>
                </li> 
                <li>
                    <a href="https://github.com/SergeyXXI/learning-react-meals" target="_blank" rel="noreferrer">Repo</a>
                </li>                
            </ul>
        </div>
    </nav>
);

export default Header;