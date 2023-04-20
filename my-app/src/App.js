
// import logo from './logo.svg';
import './App.css';
 import About from './components/About';
//  import Nav from "./components/nav"
import Navbar from "./components/Navbar";
import Textforms from './components/Textforms';
// import MyButton from './components/Mybutton';
// import Button from "./components/Button3"
import Alert from "./components/Alert";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("dark");  
  
  const  toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    
    <>


      {/* <Navbar title="TextUtils" AboutText="About  TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
      <Alert alert = "this is alert" />
      <div className="container" my-3>
        <Textforms heading="enter the text analyze below" mode={mode} />
        </div> 

     

         
    

 
<About/>


    </>

    // <>
    // <div className="blank">lovely</div>
    // <MyButton/>
    // <Button/>
    // </>
    

  );
}


  
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
  
    // );
//  }

export default App;
