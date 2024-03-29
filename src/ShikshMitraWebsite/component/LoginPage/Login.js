import React, { useState } from "react";
import "./LoginCss.css";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import axios from "axios";
import Dropdown from "./Dropdown";
import Cookies from "js-cookie";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const [formdata, setformdata] = useState({
    Username: "",
    Password: "",
    Role: "admin",
  });

  const { setisLoggedIn } = useStateContext();
  const Navigate = useNavigate();

  function onclickHandler(event) {
    setformdata((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    setLoading(true);

    const loginobj = {
      email: formdata.Username,
      password: formdata.Password,
      role: formdata.Role,
    };
    sessionStorage.setItem("userRole", formdata.Role);
    axios
      .post(
        "https://average-red-kimono.cyclic.app/api/v1/login",
        loginobj
      )
      .then((response) => {
        setisLoggedIn(formdata.Role);
        Cookies.set("token", response?.data?.token, { expires: 7 });

        const fullName = response.data.user.fullName;
        const image = response.data.user.image.url;
        const email = response.data.user.email;
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("image", image);
        localStorage.setItem("email", email);
        localStorage.setItem("response", JSON.stringify(response.data.user));
        const token = response.data.token;
        document.cookie = `token=${token}; path=/; max-age=3600`;
        showSuccessToast("Login successful!!!");
        Navigate(`/${formdata.Role}`);
      })
      .catch((error) => {
        console.log("error", error.stack);
        setLoading(false); // Stop the loading spinner
        showErrorToast("Login failed. Please check your credentials.");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const showErrorToast = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Auto-close the notification after 3 seconds
      style: { marginTop: "50px" }, // Add margin-top
    });
  };
  const showSuccessToast = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      style: { marginTop: "50px" },
    });
  };

  return (
    <>
      {loading && <Spinner />}
      {
        <div className="login_body">
          <div className="box">
            <form onSubmit={submitHandler}>
              <Dropdown formdata={formdata} setformdata={setformdata} />
              <div className="inputBox pt-2 rounded-md">
                <input
                  className="rounded-md "
                  required
                  type="text"
                  name="Username"
                  id="Username"
                  value={formdata.Username}
                  onChange={onclickHandler}
                />
                <label htmlFor="Username">User Name</label>
              </div>
              <div className="inputBox  rounded-md pt-2">
                <input
                  className="rounded-md "
                  required
                  type="password"
                  name="Password"
                  id="Password"
                  value={formdata.Password}
                  onChange={onclickHandler}
                />
                <label htmlFor="Password">Password</label>
              </div>
              {/* <Dropdown /> */}

              <hr />
              <input type="submit" className="p-2 w-100" />
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default Login;
