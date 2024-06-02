import React from 'react'

const CityOptions = () => {
    const cities = ['city1', 'city2', 'city3']
    return (
      <div>
          <p p style={{marginBottom:'8px'}}>*Select your city</p>
          <select style={{width:'100%'}} >
          <option value="" disabled selected>
            Choose the most relevant option
          </option>
              {cities.map((city)=><option value={city}>{city}</option>)}
          </select>
      </div>
    )
}

export default CityOptions