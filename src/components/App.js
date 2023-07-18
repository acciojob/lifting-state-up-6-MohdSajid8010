
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [complete,setComplete]=useState({Learn:false,Build:false,Deploye:false});

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent component</h1>
        <div>
          <h1>Child Component</h1>
          <ul>
            <li>
              Learn React {!complete.Learn && (<button onClick={()=>setComplete({...complete,Learn:true})}>Complete</button>) }
            </li>
            <li>
            Build a React app {!complete.Build && (<button onClick={()=>setComplete({...complete,Build:true})}>Complete</button>) }
            </li>
            <li>
            Deploy the React app {!complete.Deploye && (<button onClick={()=>setComplete({...complete,Deploye:true})}>Complete</button>) }
            </li>
          </ul>
        </div>
    </div>
  )
}

export default App
