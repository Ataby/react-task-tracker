import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const ListTask = ({task}) => {
  return (
    <div>
      {task.map((item)=>{
        const {id,date,name}=item;
        return(
          <div key={id} 
          className='d-flex justify-content-between align-items-center
          border-white mt-2'>
            <div className="task">
              <h5>{name}</h5>
              <p>{date}</p>
            </div>
            <div className="delete">
            <FaDeleteLeft />
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ListTask;