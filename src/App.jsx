import Header from "./components/Header";
import Main from "/src/components/Main";
import Footer from "/src/components/Footer";
import { BrowserRouter } from "react-router-dom";

function App(){
  return (
  <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
  </BrowserRouter>
  )
}

export default App;
  