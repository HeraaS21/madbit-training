import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Homepage";
import BottomNav from "./layout/BottomNav";
import Profile from "./pages/home/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <>
            <Home />
            <BottomNav />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <Profile />
            <BottomNav />
          </>
        }
      />
    </Routes>
  );
}

export default App;
