import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ListEmp } from "./components/ListEmp";
import { Routes, Route } from "react-router-dom";
import { AddEmp } from "./components/AddEmp";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/employees" element={<ListEmp />}></Route>
          <Route path="/add-employee" element={<AddEmp />}></Route>
          <Route path="/edit-employee/:id" element={<AddEmp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
