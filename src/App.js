import React from 'react'
import routes from './routes'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <img src="" id="bg" alt=""></img> */}
      <Header />
      {routes}
    </div>
  );
}

export default App;
