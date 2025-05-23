import "./App.css";
import PorDoSol from "../src/assets/porDoSol.png";

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <img src="/imgpequena.png" alt="" />
      </div>
      <div>
        <img src={PorDoSol} alt="" />
      </div>
    </div>
  );
}

export default App;
