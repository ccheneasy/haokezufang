import React from 'react';
import {HashRouter as Router,Route, Redirect} from 'react-router-dom'
import Home from './pages/home'
import CitySelect from './pages/citySelect/index'
import MapFound from './pages/mapFound'
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router> 
        <Route component={Home} path="/home"></Route>
        <Route path="/" exact>
          <Redirect to='/home'></Redirect>
        </Route>
        <Route component={CitySelect} path="/citySelect" exact></Route>
        <Route component={MapFound} path="/mapFound" exact></Route>
      </Router>
    </div>
  );
}

export default App;
