import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Employee from "./Pages/Employee/Employee";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
}

export default App;
