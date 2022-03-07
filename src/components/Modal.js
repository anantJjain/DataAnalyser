import React,{useState} from 'react'
// import Modal from 'react-modal'
import '../../src/Modal.css'

// function Modal({}) {
    
    
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};


// const [allValues,setAllValues] = useState({
//       open:false,
//       rank:12890,
//       percentile:37,
//       currentscore:07,
//     })

  
//     return (
    
//       <Modal isOpen={open}>
//       <h1>Update Skill Scores</h1>
//       <h1>Update your rank={rank}</h1>
//       <button onClick={(prevState) => setRank(prevState => prevState+1)}>Increment</button>
//       <button onClick={(prevState) => setRank(prevState => prevState-1)}>Decrement</button>

//       <h1>Update your percentile-{percentile}</h1>
//       <button onClick={(prevState) => setPercentile(prevState => prevState+1)}>Increment</button>
//       <button onClick={(prevState) => setPercentile(prevState => prevState-1)}>Decrement</button>

//       <h1>Update your current score-{currentscore}</h1>
//       <button onClick={(prevState) => setCurrentscore(prevState => prevState+1)}>Increment</button>
//       <button onClick={(prevState) => setCurrentscore(prevState => prevState-1)}>Decrement</button>
      
     


//       <button onClick={()=>Setopen(false)}>Save</button>
//       </Modal>

//   )
// }

export default Modal