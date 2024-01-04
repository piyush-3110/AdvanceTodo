import { useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signin", {
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
          <button style={{ backgroundColor: "aqua" }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default App;
