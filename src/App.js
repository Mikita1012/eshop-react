import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import Navigation from './components/Navigation/Navigation';



function App() {
  return (
    <div>
      Hello React
      <Router>
        <Routes>

          <Route exact path="/" element={<Navigation></Navigation>} />
          <Route exact path="/signin" element={<SignUp></SignUp>} />
         



        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
