import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Article } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:infoID" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
