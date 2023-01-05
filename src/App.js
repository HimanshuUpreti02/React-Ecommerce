import React from "react";
import Home from "./routes/home.component";
import { Routes , Route } from "react-router-dom";
import Navbar from "./routes/Navbar.component";
import Authentication from "./routes/authentication.component";


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
        <Route path="auth" element= {<Authentication/>}/>
      </Route>
    </Routes>
  );
};
export default App;
