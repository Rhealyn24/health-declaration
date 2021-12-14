import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';
import HealthList from './components/health-list.component';
import EditHealth from './components/edit-health.component';
import CreateHealth from './components/create-health.component';

function App () {
  return (
    <BrowserRouter>
       <Navbar/>
       <br/>
       <Routes>
      <Route path="/" exact element={<HealthList/>} />
      <Route path="/edit/:id" element={<EditHealth/>} />
      <Route path="/create" element={<CreateHealth/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;