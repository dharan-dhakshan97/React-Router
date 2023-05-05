import { Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
function App() {
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "100%",
          // boxShadow: "10px 10px 5px 5px black",
          display: "flex",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          backgroundColor: "white",

          justifyContent: "center",
          alignItems: "center",
          flexGrow: "flex-grow:2",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // flexGrow: "flex-grow:2",
          }}
        >
          Welcome App Page
        </h1>
        {/* flexGrow:"flex-grow:3" */}
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
