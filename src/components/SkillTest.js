import React,{useState,useRef, useCallback} from 'react'
import { hide } from 'react-modal/lib/helpers/ariaAppHider'
import '../../src/styles.css'
import Modal from './Modal'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {Doughnut} from 'react-chartjs-2'

function SkillTest() {

  const[show,setShow]=useState(false)
  const [rank,setRank] = useState(12890)
  const [percentile,setPercentile] = useState(37)
  const [currentscore,setCurrentScore] = useState(10)
  
  const onRankIncrease = () => setRank(rank => rank + 1);
  const onRankDecrease = () => setRank(rank => rank - 1);

  const onPercentileIncrease = () => setPercentile(percentile => percentile + 1);
  const onPercentileDecrease = () => setPercentile(percentile => percentile - 1);

  const onCurrentScoreIncrease = () => setCurrentScore(currentscore => currentscore + 1);
  const onCurrentScoreDecrease = () => setCurrentScore(currentscore => currentscore - 1);

  const showModal = () => setShow(true)
  
  const hideModal = () => setShow(false)

  const data = {
    'show':show,
    'rank':rank,
    'percentile':percentile,
    'currentscore':currentscore
  }


  return (
    <div className='SkillTest'>
      
      <div>Hypertext Markup Language</div>
      <div>Questions : 08  |  Duration : 15 mins  |  Submitted on 5 June 2021</div>

      <button onClick={showModal}>Update</button>
      
      <div>Your Rank-{rank}</div>
      <div>Your Percentile-{percentile}</div>
      <div>Your Current score-{currentscore}</div>


      <Line
        datasetIdKey='id'
        data={{
                labels: ['Jun', 'Jul', 'Aug'],
                datasets: [
                  {
                    id: 1,
                    label: '',
                    data:[5,6,currentscore],
                  },
                ],
              }}
      />


      <Doughnut
                datasetIdKey='id'
                data={{
                        labels: ['Correct Answers','Incorrect Answers'],
                        datasets: [
                          {
                            data:[currentscore,15-currentscore],
                            backgroundColor: [
                              '#438AF6',
                              'rgba(67, 138, 246, 0.1)'
                            ],
                          },
                        ],
                      }}
      />
      
      <Modal 
          data={data} 
          onRankIncrease={onRankIncrease}
          onRankDecrease={onRankDecrease}
          onPercentileIncrease={onPercentileIncrease}
          onPercentileDecrease={onPercentileDecrease}
          onCurrentScoreIncrease={onCurrentScoreIncrease}
          onCurrentScoreDecrease={onCurrentScoreDecrease}
          // handleSave={saveData}
          handleClose={hideModal}
      />
   
    </div>
  )
}

export default SkillTest


