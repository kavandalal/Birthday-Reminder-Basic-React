import React from 'react'
import './App.css'
import People,{ctr} from './People'


function App() {
  return (
    <React.Fragment>
      <div className="cont">
        <header>{ctr} Birthdays Today</header>
        <div>
          <People/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
