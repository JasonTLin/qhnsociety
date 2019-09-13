import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Quad2 from './components/Quadrant_2/quad2';
import Quad34 from './components/Quandrant_3_4/quad3_4'
import Feed from './components/Feed/Feed';
import MapRender from './components/Map/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar/>
        <div className="row no-margin" style={{height: "1000px"}}>
        <div className="col-6 no-padding" style={{height: "50vh"}}>
          <MapRender/>
        </div>
          <div className="col-6 no-padding" style={{height: "50vh"}}>
            <Quad2/>
          </div>
          <div className="col-12 no-padding" style={{height: "50vh"}}>
            <Quad34/>
          </div>
          <div className="col-12 no-padding" style={{height: "300vh"}}>
            <Feed/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
