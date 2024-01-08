import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
 


function App() {
  return (
    <div className="container shadow" >
      <Header/>
      <Home/>
      
    </div>
  );
}

export default App;
