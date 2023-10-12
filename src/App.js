import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import CitiesPage from './Pages/CitiesPage';
import CityModalPage from './Pages/CityModalPage';
import SideBar from './Components/SideBar';

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<CitiesPage />} path='/cities' />
        <Route element={<CityModalPage />} path='/citiesModal' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
