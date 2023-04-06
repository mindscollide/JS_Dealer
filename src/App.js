import logo from "./logo.svg";
import "./App.css";
import "./assets/custom-icons/custom-icon.css"
import Header from "./components/layout/Header/Header";
import Dealer from "./container/dealer/Dealer";
import Calculator from "./container/Calculator/Calculator";
import Sidebar from "./components/layout/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Calculator />
      {/* <Dealer/> */}

      <div className="App"></div>
    </>
  );
}

export default App;
