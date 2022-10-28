import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div data-testid="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;