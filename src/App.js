import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from './LogIn';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path="/" Component={LogIn} />
       <Route exact path="/signup" Component={SignUp} />
     </Routes>
    </div>
  );
}

export default App;
