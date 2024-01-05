import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Home = ({ email, login }) => {
  const [name, setName] = useState();
  const token = Cookies.get("token");

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
  return (
    <div>
      <div className="logout">
        <h3>{name}</h3>
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default Home;
