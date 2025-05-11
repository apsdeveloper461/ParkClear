import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import "./stylesheet/index.css";
import SingleContentPage from "./pages/SingleContentPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleContentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
