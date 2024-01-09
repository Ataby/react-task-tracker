import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

import Header from "./component/Header";
import Home from "./component/Home";
 


function App() {
  return (
    <div>
        
      
      <div className="container shadow-lg" >
      <Header/>
      <Home/>

      </div>
    
    </div>
  );
}

export default App;
