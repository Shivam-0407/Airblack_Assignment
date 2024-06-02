import React from 'react'

const GoalOptions = () => {
    const goals = ['goal1','goal2','goal3','goal4','goal5']
    return (
      <div>
          <p p style={{marginBottom:'8px'}}>*Select your goal</p>
          <select style={{width:'100%'}}>
          <option value="" disabled selected>
            Choose the most relevant option
          </option>
              {goals.map((goal)=><option value={goal}>{goal}</option>)}
          </select>
      </div>
    )
}

export default GoalOptions