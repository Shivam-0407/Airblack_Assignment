import React, { useState, useMemo } from 'react'

function CountrySelector() {
  const countryCodes = ['+91','+234','+47','+92'];
  const [selectedCountry,setSelectedCountry] = useState('');
  
  const countrySelect = (e) => {
    setSelectedCountry(e.target.value);
  };

  return(
    <select onChange={(e)=>countrySelect(e)}>
      {countryCodes.map((code)=><option  style={{color:'black'}} value={code} key={code}>{code}</option>)
      }
    </select>
  )
}

export default CountrySelector