import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Students from './pages/Students';
import Professors from './pages/Professors';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Students/>} />
          <Route exact path="/professors" element={<Professors/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;