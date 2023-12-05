import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

const UserProfile = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();
  const fullName = localStorage.getItem("fullName");
  const image = localStorage.getItem("image");
  const email = localStorage.getItem("email");
  const userRole = sessionStorage.getItem("userRole");
  const navigate = useNavigate();

  const handleLogout = (e) => {
    setIsClicked({ ...initialState, [e]: true });
    axios
      .get("https://tiny-tan-wombat-shoe.cyclic.app/api/v1/logout")
      .then((response) => {
        localStorage.removeItem("fullName");
        localStorage.removeItem("image");
        localStorage.removeItem("email");
        sessionStorage.removeItem("userRole");

        navigate("/");

        console.log("Logout Success", response);
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={image}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            {fullName}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {userRole ? userRole.toUpperCase() : ""}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {email}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <input
          type="button"
          value="Logout"
          onClick={handleLogout}
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "blue",
            borderRadius: "10px",
            cursor: "pointer",
            padding: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
