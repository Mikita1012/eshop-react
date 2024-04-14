import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from "./components/SignUp/Signup";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SignIn from './components/SignIn/SignIn';





function App() {
  return (

    <>
      <Router>
        <Routes>

          <Route exact path="/" element={<NavigationBar></NavigationBar>} />
          <Route exact path="/signup" element={<SignUp></SignUp>} />
          <Route exact path="/signin" element={<SignIn></SignIn>} />




        </Routes>
      </Router>

    </>
  );
}

export default App;
