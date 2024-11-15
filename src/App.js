
import './App.css';
import {useEffect, useState} from 'react';
import WindowSize from './windowSize';
// import size from './size';

function App() {
  const[text,setText]=useState('');

    

  // useEffect(()=>{
  //     console.log("AB");
  // });

  // useEffect(()=>{
  //   console.log("AB");
  // },[]);

  // useEffect(()=>{
  //     console.log("Hii")
  // },[text]);

  useEffect(()=>{
    console.log("add")
      return ()=>{
        console.log("remove")
      }
  },[text]);

 

  function changeHandler(event){
    setText(event.target.value);  
    console.log(text);
  }




  return (
    <div>
        <WindowSize></WindowSize>
  </div> 
  );
}

export default App;
