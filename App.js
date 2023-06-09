import React, { useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import SwapForm from './SwapForm';

function App() {
  const [account, setAccount] = useState([]);

  return (
    <div className="App">
      <Navbar account={account} setAccount={setAccount}/>
      <SwapForm account={account} setAccount={setAccount}/>
    </div>
  )
}

export default App;
