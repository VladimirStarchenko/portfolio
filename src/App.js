import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  function renderPage() {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Project") {
      return <Project />;
    } else {
      return <Home />;
    }
  }

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
