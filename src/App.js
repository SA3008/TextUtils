
import './App.css';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import Alert  from './components/Alert';
//import About from './components/About';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('#0000ff')

  const showAlert  = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)

    
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      console.log('inside if')
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode enabled","success")
    }
    else{
      setMode('light');
      console.log("inside else")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success")
    }
 }


 //trying to create a funtionc that will allow user to chose any color dark mode.
 const handleAnyColorMode = ()=>{
   let a = document.getElementById('colorpicker').value;
   console.log(a);
   setColor(a);
   toggleToAnyColor(a);
 }
// a is the picked color
 const toggleToAnyColor = (a)=>{
    document.body.style.backgroundColor = a;
   
    // to execute the below line you have to find the logic where you can decide which component is being used currently
    //if(Tcolor){
    document.getElementById('textArea').style.backgroundColor = a;
    //}
    //if(Acolor){
    //  document.getElementsByClassName('accordion-item').style.backgroundColor = a;
    //  }
    
 }
 /*
  let Tcolor = true;
  let Acolor = false
 const colorTextArea = ()=>{
    Tcolor = true;
    Acolor = false;
 }
 const colorAbout = ()=>{
  Tcolor = false;
  Acolor = true;
  document.getElementsByClassName('accordion-item').style.backgroundColor = 'green';
}
*/

  return (
   <>
    <div>
        <Navbar title="TextUtils" home="Home-Page" about="About Us" search="Find" mode={mode} toggleMode={toggleMode} color={color} handleAnyColorMode={handleAnyColorMode}/>
        <Alert alert={alert}/>
        <TextForm heading="Enter you text here to Analyse." mode={mode} showAlert={showAlert} />
    </div>
              {/* {  <Router>
              <Navbar title="TextUtils" home="Home-Page" about="About Us" search="Find" mode={mode} toggleMode={toggleMode} color={color} handleAnyColorMode={handleAnyColorMode} colorTextArea={colorTextArea} colorAbout={colorAbout} />
              <Alert alert={alert}/>
              <Routes>
              <Route exact path="/about" element = {<About />} />
              <Route exact path="/" element = {<TextForm heading="Enter you text here to Analyse." mode={mode} showAlert={showAlert} />} />  
              <Route exact path="/home" element = {<TextForm heading="Enter you text here to Analyse." mode={mode} showAlert={showAlert} />} />  
              </Routes>
              </Router>}  */}
 
  
  </>
  );
  
}

export default App;
