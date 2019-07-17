import React from 'react';
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import About from './pages/About'
import ListPresidents from './pages/ListPresidents'

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        <Home />  
        <About />  
        <ListPresidents />  
      </div>
    </div>
  );
}

export default App;
