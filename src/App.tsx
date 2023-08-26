import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Patient from "./components/Bill/PaitentData/Paitent";
import Appointment from "./components/Appointment/Appointment";
import PaitentData from "./components/Paitent/Paitent";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <div className="menu">
            <div className="sideBarItem">
              <ul>
                <li className="menuItem">
                  <img src="./image/Group.png" alt=""></img>
                  <Link to="/" className="link">
                    Dashboard
                  </Link>
                </li>
                <li className="menuItem">
                  <img src="./image/man.png" alt=""></img>
                  <Link className="link" to="/patient">
                    Patient
                  </Link>
                </li>
                <li className="menuItem">
                  <img src="./image/Vector.png" alt=""></img>
                  <Link className="link" to="/appointment">
                    Appointment
                  </Link>
                </li>
                <li className="menuItem">
                  <img src="./image/Bill.png" alt=""></img>
                  <Link className="link" to="/billing">
                    Billing
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="menuItem">
                  <img src="./image/support.png" alt=""></img>
                  <p className="link">Support</p>
                </li>
                <li className="menuItem">
                  <img src="./image/setting.png" alt=""></img>
                  <p className="link">Setting</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patient" element={<PaitentData />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/billing" element={<Patient />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
