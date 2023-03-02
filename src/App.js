import './App.css';
import Navbar from './Component/Navbar';
import Textarea from './Component/Textarea';
import { useState } from 'react';
import Alert from './Component/Alert';


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const toggle = ()=>{
      if(mode === "light"){
          setmode("dark");
          document.body.style.background = "#121212";
          document.body.style.color = "white";
      }
      else{
        setmode("light");
        document.body.style.background = "white";
        document.body.style.color = "black";
      }
  }

  function showAlert(message,type) {
    setalert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  return (
    <>
    <Navbar toggle = {toggle} mode = {mode}/>
    <Alert alert = {alert}/>
    <Textarea  mode = {mode} showAlert = {showAlert}/>
    </>
  );
}

export default App;
