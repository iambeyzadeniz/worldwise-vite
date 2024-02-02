import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from "./pages/Product"; 
import Login from "./pages/Login"; 

import AppLayout from "./pages/AppLayout";
import CityList from './components/CityList';
import { useState } from 'react';
import { useEffect } from 'react';

const BASE_URL = "http://localhost:8000"
function App(props) {

  const [cities ,setCities] = useState({});
  const [isLoading , setIsLoading] = useState(fale);

useEffect (function() {
  async function fetchCities(){
try{
  setIsLoading(true);
  const res =  await fetch(`${BASE_URL}/cities`);
  const data = await res.json();
  setCities(data);
}catch{
  alert("abc");
}finally{
  setIsLoading(false);
}
  }
  fetchCities();
} , []);





















  // useEffect(function fetchCities() {
  //   async function fetchCities(){
  //     try{
  //     const res = await fetch(`${BASE_URL}/cities`);
  //     const data = await res.json();
  //     setCities(data);
  //   } catch {
  //     alert("Veri yüklenirken hata oluştu..");
  //   }finally {
  //     setIsLoading(false);
  //   } 
  // }
  //   fetchCities();
  // } , []);
  return (
  <BrowserRouter>
  <Routes>
    <Route index element={<Homepage />} />
    <Route path="product" element={<Product />} />
    <Route path='pricing' element={<Pricing />} />
        <Route path='/login' element={<Login />} />

        <Route path='app' element={<AppLayout />} >
          <Route index element ={<CityList />} />
          <Route path='cities' element={<CityList />} />
          <Route path='countries' element={<p>Countries</p>} />
          <Route path='form' element={<p>Form</p>} />
        </Route>
   <Route path='*' element={<PageNotFound />} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;