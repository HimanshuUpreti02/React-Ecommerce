import React from "react";
import Home from "./routes/home.component";
import { Routes , Route } from "react-router-dom";
import Navbar from "./routes/Navbar.component";
import SignIn from "./routes/sign-in.component";


const Shop =() =>{
  return(
    <div>
      this is shop component
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Navbar/>}>
        <Route index element = {<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element= {<SignIn/>}/>
      </Route>
    </Routes>
  );
};
export default App;
