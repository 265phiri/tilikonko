import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import ScrollToTop from "./components/ScrollToTOp";


function App() {

  return (

    <>
    < Header />
    <ScrollToTop/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/events" element={<Events/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Contact/Signin" element={<SignIn/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App;
