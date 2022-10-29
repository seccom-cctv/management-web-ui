import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Companies from './Pages/Companies/Companies';
import Users from './Pages/Users/Users';
import Buildings from './Pages/Buildings/Buildings';
import BuildingDetails from './Pages/BuildingDetails/BuildingDetails';

function App() {
  return (
    <div data-testid="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/users' element={<Users />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/building' element={<BuildingDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;