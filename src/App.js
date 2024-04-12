// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './component/Table';

function App() {
  return (
    <div>
      <Router>

        <div className='container'>
          <Routes>
          <Route path="/" element={<Table/>} exact/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
