import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Students from './pages/Students';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Students/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;