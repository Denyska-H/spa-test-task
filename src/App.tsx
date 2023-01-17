import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux";
import { Home, Article } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:infoID" element={<Article />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
