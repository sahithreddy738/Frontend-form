import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import React from 'react';
import Users from "./components/Users";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => (
  <div className="w-full min-h-screen bg-amber-50">
      <ToastContainer />
    <BrowserRouter basename="/">
       <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/users" element={<Users/>}/>
       </Routes>
    </BrowserRouter>
  </div>
);
export default App;