import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {ItemListContainer} from './components/ItemListContainer';
import {Error404} from "./components/Error404";
import {BodyApp} from './components/BodyApp';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar/>
        <Routes>
          <Route exact path={"/"} element={< BodyApp/>}/>
          <Route exact path={"/category/:id"} element={<ItemListContainer/>} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"*"} element={<Error404/>} />;
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}