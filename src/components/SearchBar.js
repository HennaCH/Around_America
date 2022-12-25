import { useCallback, useEffect, useState } from "react";
import React from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const capitals = [

    { name: "Bolivia", capital: "La Paz", continent: "South America" },
    { name: "Bresil", capital:"Brasilia", continent: "South America" },
    { name: "Chili", capital:"Santiago", continent: "South America" },
    { name: "Colombie", capital:"Bogota", continent: "South America" },
    { name: "Ecuador", capital:"Quito", continent: "South America" },
    { name: "Guyana", capital:"Georgetown", continent: "South America" },
    { name: "Paraguaw", capital:"Asuncion", continent: "South America" },

    { name: "Greenland", capital:"Nuuk", continent: "North America" },
    { name: "United States", capital:"Washington", continent: "North America" },
    { name: "Canada", capital:"Ottawa", continent: "South America" },
    { name: "Guatemala", capital:"Guatemala City", continent: "North America" },
    { name: "Mexico", capital:"Mexico City", continent: "North America" },
    { name: "Honduras", capital:"Tegucigalpa", continent: "North America" },
    { name: "Panama", capital:"Panama City", continent: "North America" },
    { name: "Cuba", capital:"Havana", continent: "North America" },
    { name: "Dominican Republic", capital:"Santo Domingo", continent: "North America" }
  ];
  
  return  <div>
    <p><b>Find the capital of a country !</b></p>
  <input
     type="search"
     placeholder="Search a country..."
     onChange={(e) => {setSearchInput(e.target.value)}}
     value={searchInput} />
  

      <p><b className='capitalFont'>Capital</b></p>
  
  {capitals.filter((country) => {
    if(searchInput == "")
    {
        return ;
    }
    else if(country.name.toLowerCase().includes(searchInput.toLowerCase()))
    {
        return country;
    } 
    }).map((capital) => 
     {
        return(
          <p> {capital.capital}</p>
        );
     }
     )
   }
  </div>
  }
  export default SearchBar;

  