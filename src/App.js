import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <div className="top-header" />
      <Router >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
