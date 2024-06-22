import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import CatalogPage from "./components/CatalogPage";
import CarzinaPage from "./components/CarzinaPage";
import FavouritePage from "./components/FavouritePage";

function App() {
      return (
          <div style={{background: "#1F273D"}}>
              <BrowserRouter>
                  <Routes>
                      <Route path={"*"} element={<MainPage/>}/>
                      <Route path={"catalog"} element={<CatalogPage/>}/>
                      <Route path={"carzina"} element={<CarzinaPage/>}/>
                      <Route path={"favourite"} element={<FavouritePage/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
  );
}

export default App;
