import React,{useState,useRef} from 'react'
import '../../src/styles.css'
// import Modal from 'react-modal'
import Modal from './Modal'
import QuickStats from './QuickStats'
import ComparisonGraph from './ComparisonGraph'
import QuesAnalysis from './QuesAnalysis'


function SkillTest() {

  const[show,setShow]=useState(false)
  const showModal = () =>{
    setShow(true)
  }

  const hideModal = () =>{
    setShow(false)
  }

  return (
    <div className='SkillTest'>
      <div>Hypertext Markup Language</div>
      <div>Questions:08|Duration:15 mins|Submitted on 5 June 2021</div>
      <Modal show={show} handleClose={hideModal} />
      <button onClick={()=>showModal}>Update</button>
    </div>
  )
}

export default SkillTest