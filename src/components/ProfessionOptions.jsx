import React from 'react'

const ProfessionOptions = () => {
    const professions = ['HouseWife','WorkingProfessional']
  return (
    <div className='profession-container'>
        <p style={{marginBottom:'8px'}}>*Select your profession</p>
        <select style={{width:'100%'}}>
        <option value="" disabled selected>
          Choose the most relevant option
        </option>
            {professions.map((profession)=><option style={{width:`100%`}} value={profession}>{profession}</option>)}
        </select>
    </div>
  )
}

export default ProfessionOptions