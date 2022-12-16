import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home"
import Register from "./components/Register";
import Login from "./components/Login";
import Tiles from "./components/Tiles";
import Upload from "./components/Upload-read";
import Data_grid from "./components/Data_grid";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="tiles" element={<Tiles />} />
      <Route exact path="upload" element={<Upload />} />
      <Route exact path="datatable" element={<Data_grid />} />
    </Routes>
  );
}

export default App;
