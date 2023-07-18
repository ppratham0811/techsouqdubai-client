import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Login from "./Components/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#26619C"
          />
        </div>
      ) : (
        <div className="App flex min-h-screen flex-col">
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
