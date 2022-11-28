import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Companies from './Pages/Companies/Companies';
import Users from './Pages/Users/Users';
import Buildings from './Pages/Buildings/Buildings';
import BuildingDetails from './Pages/BuildingDetails/BuildingDetails';
import Intrusions from './Pages/Intrusions/Intrusions';
import Login from './Login/Login';
import { Account } from './components/Account/Account';
import Settings from './Pages/Settings/Settings';
import Status from './components/Status/Status';

function App() {
  return (
    <div data-testid="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' exact element={<Login />} />
          <Route path='/companies/list' element={<Home />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/users' element={<Users />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/building' element={<BuildingDetails />} />
          <Route path='/intrusions' element={<Intrusions />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;