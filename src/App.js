import logo from './logo.svg';
import './App.css';
import NorthAmerica from './components/NorthAmerica';
import { useCallback, useEffect, useState } from "react";
import SouthAmerica from './components/SouthAmerica';
import HeartSwitchBtn from './components/heartSwitch';
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/countries')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  const [visible1,setVisible1] = useState(false);
  const [visible2,setVisible2] = useState(false);
  // const promise = axios.get("https://api.github.com/search/users?q=tawjaw")
  // .then(function(response){
  //   console.log(response)
  // })
  // .catch(function(error){
  //   console.log(error)
  // })
  // console.log("after")

  return(
    <body>
    <div>
      <button  onClick={()=>{setVisible1(!visible1); setVisible2(false)}}> North America </button> 
      <button onClick={()=>{setVisible2(!visible2); setVisible1(false)}}> South America</button>
      {/* change the map to true or false*/} 
      <div className='heartSwitchStyle'><HeartSwitchBtn/></div>
      <div><p className='searchBar'><SearchBar/></p></div>
      
     

      <div className='map1style'>{visible1 && <NorthAmerica/>}</div>
      <div className='map2style'>{visible2 && <SouthAmerica/>}</div>
      
       {/* When the visible is set to true, show map */}
       </div>
       </body>
  )
  }

export default App;
