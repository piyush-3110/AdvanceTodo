import { useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";
import Home from "./Home";
import Signup from "./Signup";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setlogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const handlesignup = (e) => {
    e.preventDefault();
    setSignup(true);
  };
  const handleClick = async () => {
    try {
      await axios
        .post("http://localhost:3000/signin", {
          email: email,
          password: password,
        })
        .then((response) => {
          const token = response.data.jwtToken;
          Cookies.set("token", token, { expires: 7, secure: true });
          setlogin(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {signup ? (
        <Signup />
      ) : (
        <div>
          {login ? (
            <Home email={email} login={login} />
          ) : (
            <div className="parentclass">
              <div className="child1">
                <h1>Login to your account</h1>
                <p>Login your social account</p>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <button onClick={handleClick}>Sign in</button>
              </div>
              <div className="child2">
                <h1>New Here?</h1>
                <p>Sign Up and access your own free To-do</p>
                <button
                  style={{ backgroundColor: "aqua" }}
                  onClick={handlesignup}
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
