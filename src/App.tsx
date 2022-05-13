import React from "react";
import { Routes, Route } from "react-router-dom";
import { Confirmation } from "./pages/Confirmation";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
