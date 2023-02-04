import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Adventure from "./pages/Adventure/Adventure";
import Allocate from "./pages/Allocate/Allocate";
import Login from "./pages/Landing/Login";
import Main from "./pages/Main/Main";
import Skill from "./pages/Skill/Skill";

function App() {
  const [user, setUser] = useState({
    name: "Ash",
    stepPoints: 5000,
    energy: 300,
    health: 10,
    skills: [
      {
        name: "Attack",
        level: 8,
        exp: 0,
        expToNextLevel: 100,
        description:
          "Your attack level determines the accuracy of your attacks.",
      },
      {
        name: "Defense",
        level: 1,
        exp: 0,
        expToNextLevel: 100,
        description:
          "Your defense level determines the damage you take from attacks.",
      },
      {
        name: "Strength",
        level: 17,
        exp: 0,
        expToNextLevel: 100,
        description:
          "Your strength level determines the damage of your attacks.",
      },
      {
        name: "Vitality",
        level: 10,
        exp: 0,
        expToNextLevel: 100,
        description: "Your vitality level determines your maximum health.",
      },
    ],
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/main" element={<Main user={user} />} />
        <Route path="/allocate" element={<Allocate user={user} />} />
        <Route path="/allocate/:name" element={<Skill user={user} />} />
        <Route
          path="/adventure"
          element={<Adventure user={user} setUser={setUser} />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
