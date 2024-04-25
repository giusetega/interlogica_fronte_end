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
      {/* <Helmet>
        <title>Ivrea Parkour</title>
        <meta 
        name="description"
         content="Ivrea Parkour nasce nel 2007 da un gruppo di appassionati ragazzi pronti a tuffarsi nella disciplina del Parkour. Nel tempo il gruppo si è evoluto diventanto un gran community e punto di riferimento per i più giovani che si vogliono interfacciare con questo sport." />
      </Helmet> */}
      <div className="top-header" />
      <Router >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/corsi" component={Corsi} />
          <Route exact path="/galleria" component={Galleria} /> */}
          {/* <Route exact  path="/teamaves" component={Team} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
