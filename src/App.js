import Navbar from "./Components/Navbar/Navbar.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App flex min-h-screen flex-col">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
