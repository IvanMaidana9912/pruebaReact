import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar';

import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import BodyApp from './components/BodyApp';
import ItemListContainer from './components/ItemListContainer';
import Error404 from "./components/Error404";

function App() {
  return (
    < BrowserRouter>
      <div className='container'>
        < Nav />
        < Routes>
          <Route path={"/"} element={< BodyApp />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />;
        </Routes>
        < Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;