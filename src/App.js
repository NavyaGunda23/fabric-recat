import React from 'react';
import './App.css';
import Sidebar from './sidebar';



class App extends React.Component{


  render(){
    return (
      <div>
          <Sidebar />
         
             <p className="ml-60">Apis</p> 
      </div>
    );
  }
}

export default App;
