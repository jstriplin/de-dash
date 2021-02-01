import "./styles/App.css";
// import Bar from "./components/ChartPrimary-1";
// import Line from "./components/ChartPrimary-2";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import TestChart from "./components/TestChart";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Sidebar />
      <div className="chart-container">
        {/*<Bar />*/}
        {/*<Line />*/}
        <TestChart />
      </div>
    </div>
  );
}

export default App;
