import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route exact path='/' element={<ListEmployeeComponent/>}/>
                <Route exact path='/employees' element={<ListEmployeeComponent/>}/>
                <Route exact path='/add-employee' element={<CreateEmployee/>}/>
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
