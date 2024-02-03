import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cardItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-lime-100 shadow-lg m-2">
      <div className="logo-container">
        <img
          className="w-40 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/013/342/395/original/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:border border-solid border-slate-950">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:border border-solid border-slate-950">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4 hover:border border-solid border-slate-950">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:border border-solid border-slate-950">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:border border-solid border-slate-950">
            <Link to="/cart"> Cart ({cardItems.length} items)</Link>
          </li>
          <li className="px-4 hover:border border-solid border-slate-950">
            {loggedInUser}
          </li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
