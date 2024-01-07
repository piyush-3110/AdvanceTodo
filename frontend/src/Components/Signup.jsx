import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", {
        fullname: name,
        email,
        password,
      })
      .then((response) => {
        setSignup(true);
        console.log(response.data.message);
        toast.success("Successfully SignedUp");
      })
      .catch((error) => {
        toast.error(error.response.data);
        console.log(error);
      });
  };
  return (
    <div>
      {signup ? (
        <Login />
      ) : (
        <div className="signupparent">
          <div className="signupparent1">
            <h3>SignUp Here to get access of Todo List</h3>
            <label>
              <input
                type="text"
                style={{ width: 250, height: 30 }}
                onChange={(e) => setName(e.target.value)}
              ></input>{" "}
              <br></br>
              Fullname
            </label>
            <label>
              <input
                type="text"
                style={{ width: 250, height: 30 }}
                onChange={(e) => setEmail(e.target.value)}
              ></input>{" "}
              <br></br>
              Email
            </label>
            <label>
              <input
                type="text"
                style={{ width: 250, height: 30 }}
                onChange={(e) => setPassword(e.target.value)}
              ></input>{" "}
              <br></br>
              Password
            </label>
            <button onClick={handleClick}>SignUp</button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Signup;
