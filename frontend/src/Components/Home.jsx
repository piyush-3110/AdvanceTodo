import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import Todo from "./Todo";
const Home = ({ email, login }) => {
  const [name, setName] = useState();
  const token = Cookies.get("token");
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        };

        const response = await axios.get("http://localhost:3000/users", {
          params: {
            email: email,
          },
          headers: headers,
        });

        console.log(response.data.data.fullname);
        setName(response.data.data.fullname);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token, email]);
  const handleLogout = (e) => {
    e.preventDefault();
    try {
      setLogout(true);
      Cookies.remove(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {logout ? (
        <Login />
      ) : (
        <div>
          <div className="logout">
            <h3>{name}</h3>
            <button onClick={handleLogout}>LogOut</button>
          </div>
          <Todo />
        </div>
      )}
    </div>
  );
};

export default Home;
