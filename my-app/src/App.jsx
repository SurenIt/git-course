import "./App.css";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { Mersedec } from "./components/Mersedec";
import { Bmw } from "./components/Bmw";
import { Bugati } from "./components/Bugati";
import { Volvo } from "./components/Volvo";
import { Kia } from "./components/Kia";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Meqenaneri arajin serianer@</h1>
        <div className="parent">
          <a href="#">
            <Link to="/">Mersedes</Link>
          </a>
          <a href="#">
            <Link to="/bmw">Bmw</Link>
          </a>
          <a href="#">
            <Link to="/bugati">Bugati</Link>
          </a>
          <a href="#">
            <Link to="/volvo">Volvo</Link>
          </a>
          <a href="#">
            <Link to="/kia">Kia</Link>
          </a>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Mersedec/>}/>
        <Route path="/Bmw" element={<Bmw/>}/>
        <Route path="/bugati" element={<Bugati/>}/>
        <Route path="/volvo" element={<Volvo/>}/>
        <Route path="/kia" element={<Kia/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
