import "../src/css/main.scss";
import { HomePage } from "./components/HomePage";
import NavBar from "./components/NavBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import MintPage from "./pages/MintPage";

// swiper css 
import "swiper/css/bundle";
import Terms from "./pages/TermsPage";
// import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes >
          <Route exact path="/" element={<><HomePage /></>} />
          <Route exact path="mint" element={<MintPage />} />
          <Route exact path="terms" element={<Terms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
