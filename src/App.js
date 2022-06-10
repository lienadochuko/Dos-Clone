import React from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import {Pages} from './components';
import {Load} from './components';
import { Document } from './components';
import {Loadcopy} from './components';
import { Documentcopy } from './components';
import './App.css';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Pages />}/>
        <Route exact path="/CertificateAuthentication" element={<Load />}/>
        <Route exact path="/CertificatePrint" element={<Document />}/>
        <Route exact path="/CertificateAuthentications" element={<Loadcopy />}/>
        <Route exact path="/CertificatePrints" element={<Documentcopy />}/>
      </Routes>
    </Router>
  );
}

export default App;
