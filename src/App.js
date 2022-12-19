import logo from './logo.svg';
import './App.css';
import NorthAmerica from './components/NorthAmerica';
import { useCallback, useEffect, useState } from "react";
import SouthAmerica from './components/SouthAmerica';
import Example from './components/heartSwitch';
import HeartSwitchBtn from './components/heartSwitch';

function App() {
  const [visible1,setVisible1] = useState(false);
  const [visible2,setVisible2] = useState(false);
  
  return(
    <div> 
      <button  onClick={()=>{setVisible1(!visible1); setVisible2(false)} }> North America </button> 
      <button onClick={()=>{setVisible2(!visible2); setVisible1(false)}}> South America</button>
      {/* change the map to true or false*/} 

      {visible1 && <NorthAmerica/>}
      {visible2 && <SouthAmerica/>}
       {/* When the visible is set to true, show map */}
       <HeartSwitchBtn/>


    </div>
  )
}

export default App;
