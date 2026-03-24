import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import './App.css'
import { CheckPin } from "./Pages/CheckPin";
import HomePage from "./Pages/HomePage";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/pin" Component={CheckPin}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
