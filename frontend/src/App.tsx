import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/pages/Home";
import BottomNav from "./layout/BottomNav";
import Profile from "./pages/home/pages/Profile";
import AddPost from "./pages/home/pages/AddPost";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<><Home /><BottomNav/></>} />
      <Route path="/profile" element={<><Profile /><BottomNav/></>} />
      <Route path="/add" element={<><AddPost /><BottomNav/></>} />
    </Routes>
  );
}

export default App;
