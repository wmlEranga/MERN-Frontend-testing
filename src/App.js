import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>  
        <Header/>
        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path = "/" exact element={<AllStudent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
