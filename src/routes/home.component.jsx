import React from "react";
import '../categories.styles.scss'
import Categories from "../Components/Categories.component";
import categories from "../utils";


const Home = () => {
  return (
    <div>
      <Categories categories = { categories}/>
    </div>
  );
};
export default Home;
