import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route,Link } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/DashBoard">DashBoard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
        </div>

      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Dashboard" element={<DashBoard />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
