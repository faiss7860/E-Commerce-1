import React , {useState} from "react";
import '../Components/Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_LOGGED_USRS_KEY } from "./UsersList";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { isLoggedIn, user, setUser } = props;
  let navigate = useNavigate();
  const items = useSelector((state)=> state.card.CardsSlice)  
  // console.log(items)

  function LogOutUser() {
    setUser({});
    localStorage.setItem(LOCAL_STORAGE_LOGGED_USRS_KEY, JSON.stringify({}));
    navigate("/login");
  }

  const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="Navbar">
        <h2 className="muscle">Flip<span className="nav-logo">Store</span></h2>
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/" onClick={() => setIsOpen(!isOpen)}>Home</Link>
          <Link to="/AddtoCardPage" onClick={() => setIsOpen(!isOpen)}>Cart:<span className="nav-logo">{items.length}</span></Link>
          <Link to="/signup" onClick={() => setIsOpen(!isOpen)}>{isLoggedIn ? "Hello" : "Sign Up"}</Link>
          <Link to="/login" onClick={() => setIsOpen(!isOpen)}>{isLoggedIn ? user.userName : ""}{isLoggedIn ? "" : "Login"}</Link>
          <Link onClick={LogOutUser}>{isLoggedIn ? "Logout" : ""}</Link>
         
         
          
          
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    );
  };
export default Navbar;
