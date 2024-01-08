import taskIcon from "./add-icon.png";

const Header = () => {
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center">
            <img src={taskIcon} alt="" style={{width:"50px"}} />
            <h1>TASK TRACKER</h1>
        </div>
    </div>
  )
}

export default Header