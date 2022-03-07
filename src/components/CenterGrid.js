import React from 'react'
import ComparisonGraph from './ComparisonGraph'
import QuickStats from './QuickStats'
import SkillTest from './SkillTest'

function CenterGrid() {
  return (
    <div className='CenterGrid'>
        <SkillTest />
        <QuickStats />
        <ComparisonGraph />
    </div>
      )
}

export default CenterGrid