import axios from "axios";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
// import Button from "react-bootstrap/Button";
import { useState,useEffect } from "react";



const Home = () => {

  const [showing, setshowing] = useState(false);
  const [text, settext] = useState("Add New Task");
  const [color, setcolor] = useState("bg-danger");
  const url =" https://659a7537652b843dea539125.mockapi.io/api/v1/task";

  const handleShowing=()=>{
    setshowing(!showing);
    const buttonText = showing ? "Add New Task" : "hide task bar" ;
    const buttonColor = showing && setcolor("bg-danger")  ;
    settext(buttonText);
    document.querySelector(".rounded").classList.toggle(color);
  }

  //C,R,U,D => READ(GET)
  const [task ,setTask]=useState();//DEGISEN VEYA YENI GELEN TASK'I ALMAMIZ GEREKIYOR.
  const getTask = async function(){
    const {data} = await axios(url);
    setTask(data);
    console.log(data)
  }
  useEffect(() => {
    getTask();
  
    // return () => {
    //   UNMOUNT ISTEMEDIGIMIZ ICIN, SUREKLI CALISMASINI ISTEDIGIMIZ ICIN RETURN KISMINI KALDIRIYORUZ 
    // }
  }, []);
  


  return (
    <div className=" mt-3 d-flex flex-column p-2">
      {task && <ListTask task={task} getTask={getTask}/> }
       {showing && <AddTask getTask={getTask} />}
      <button className=" p-2 rounded bg-primary text-white w-50 mt-3 " style={{fontWeight:"300",textShadow:"0px 0px 1px white"}} onClick={()=>handleShowing()}>{text}</button>
    </div>
  )
}

export default Home;