
import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import OurPages from "./Pages/OurPages";
import Services from './Pages/Services'
import PageNotFound from "./Pages/PageNotFound";



function App() {
  return (
    <>

      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} /> 
          <Route path='/OurPages' element={<OurPages/>} />
          <Route path='/Services' element={<Services/>}/>
          
          
          
          <Route path="*" element={ <PageNotFound/> } />
                    
        </Routes>
        
      </Router>
       
    </>
  );
}

export default App;
