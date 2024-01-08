import axios from "axios";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
// import Button from "react-bootstrap/Button";
import { useState,useEffect } from "react";



const Home = () => {

  const [showing, setshowing] = useState(false);
  const [text, settext] = useState("Show Task Bar");
  const [color, setcolor] = useState("bg-danger");
  const url =" https://659a7537652b843dea539125.mockapi.io/api/v1/task";

  const handleShowing=()=>{
    setshowing(!showing);
    const buttonText = showing ? "Show Task Bar" : "Hide Task Bar" ;
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
      <button className=" p-2 rounded bg-primary text-white " style={{fontWeight:"600"}} onClick={()=>handleShowing()}>{text}</button>
       {showing && <AddTask/>}
      <ListTask task={task}/>
    </div>
  )
}

export default Home;