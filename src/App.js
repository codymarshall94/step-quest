import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Adventure from "./pages/Adventure/Adventure";
import Allocate from "./pages/Allocate/Allocate";
import Login from "./pages/Landing/Login";
import Main from "./pages/Main/Main";

function App() {

  /* formula for experience points

  const ExperienceForLevel = (level) => {
  let total = 0;
  for (let i = 1; i < level; i++) {
    total += Math.floor(i + 300 * Math.pow(2, i / 7.0));
  }

  return Math.floor(total / 4);
}
*/

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/main" element={<Main /> } />
        <Route path="/allocate" element={<Allocate />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
