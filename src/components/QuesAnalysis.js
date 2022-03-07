import React from 'react'
import '../../src/styles.css'
import {Doughnut} from 'react-chartjs-2'
import { RedFormat } from 'three'

function QuesAnalysis(props) {
  const data = {
    
    datasets:[
      {
      
        data:['7','8'],  //generate dynamic data here
        
        backgroundColor: [
          'rgba(67, 138, 246, 1)',
          'rgba(67, 138, 246, 0.1)',
          
        ],
    
      }
    ]
  }
  return (
    <div className='QuesAnalysis'>Question Analysis
    <p> You scored {props.currentscore} correct out of 15.However it still need some improvements</p>
    <Doughnut data={data}/>
   </div>

  )
}

export default QuesAnalysis