import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';

import Greetings from './Greetings.js';
import SayHello from './SayHello.js';

function App() {
  return (
    <div className="App">
      <img src={logo} width="400" 
     height="500" alt ='Logo '></img>
      <h1>
          Welcome to Fullstack Development</h1>
        <Welcome></Welcome>
        <Greetings></Greetings>
        <SayHello fname= "Masha"/>
        <SayHello lname= "Sofronova"/>
        <SayHello fname= "GREAT"/>
        <h2>George Brown College</h2>
    </div>
  );
}

export default App;
