import "./Nav.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from "/home/syeda/Desktop/React/classes/src/assests/logo512.png";
// import { faHouse,faCode,faUser,faPhone } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";
function Nav(){
    return (
        <nav>
            <img src={img} alt=""/>
            <ul className="nav-bar">
                {/* <li className="nav-item"><a href=""><FontAwesomeIcon icon={faHouse} />Home</a></li> */}
                {/* <li className="nav-item"><a href=""><FontAwesomeIcon icon={faUser} />About</a></li> */}
                {/* <li className="nav-item"><a href=""><FontAwesomeIcon icon={faCode} />Projects</a></li> */}
                {/* <li className="nav-item"><a href=""><FontAwesomeIcon icon={faPhone} />Contact Us</li> */}
            </ul>
        </nav>

    )
}
export default Nav;