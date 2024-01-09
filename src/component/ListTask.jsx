import axios from 'axios';
import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const ListTask = ({task,getTask}) => {

  const handleDelete= async function(id){
    const urlDelete = "https://659a7537652b843dea539125.mockapi.io/api/v1/task/"+id;

    try {
      await axios.delete(urlDelete);
      getTask();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      {task.map((item)=>{
        const {id,date,task}=item;
        return(
          <div key={id} style={{backgroundColor:"lightgray"}}
          className='d-flex justify-content-between align-items-center
           mt-2 p-3 rounded-3'>
            <div className="task">
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div className="delete p-2 " style={{cursor:"pointer"}}>
            <FaDeleteLeft onClick={()=>handleDelete(id)}/>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ListTask;