import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
  );
};

export default App;
