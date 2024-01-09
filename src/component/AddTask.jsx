import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,useEffect } from 'react';
import axios from 'axios';

const AddTask = ({getTask}) => {
  const [task, setTask] = useState("");
  const [date,setDate] = useState("");

  const handleSubmit = function(e){
    e.preventDefault();
    const newTask = {task,date};
    // console.log("task and date: ",task,date);
    addNewTask(newTask);
    setDate("");
    setTask("");
    
  };

  const addNewTask = async function(newTask){
    const {name,date}=newTask;
    const url =" https://659a7537652b843dea539125.mockapi.io/api/v1/task";

    try {
      await axios.post(url,newTask);
      getTask();
       
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <div>
       {<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Control className="clean" type="text" placeholder="Add task" onChange={(e)=>setTask(e.target.value)}/>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      {/* ON.CHANGE EVENTI HER HARF YAZDIGIMIZDA CALISACAGI ICIN SUBMIT BUTONU ILE TUM VERILER GIRILINCE ADD.TASK YAPIYORUZ  */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className="clean" type="date" placeholder="Until" onChange={(e)=>setDate(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" className='w-100 font-weight-bold' onClick={handleSubmit}>
        SAVE TASK
      </Button>
    </Form>}
    </div>
  )
}

export default AddTask;