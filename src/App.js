import "./App.css";
import React from "react";
import Navbar from "./component/forms/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./component/forms/Login";
import Compnies from "./component/forms/Compnies";
import ShowAllPerson from "./component/forms/showAllPerson";
import Animal from "./component/forms/Animal";
import Profile from "./component/forms/Profile";
import AnimalImage from "./component/forms/AnimalImage";
import AnimalPokemon from "./component/forms/AnimalPokemon";
import ImageCategory from "./component/forms/ImageCategory";
import Home from "./component/forms/Home";
import Laptops from "./component/forms/Laptops";
import Books from "./component/forms/Books";
import RandomImage from "./component/forms/RandomImage";
import BookList from "./component/forms/BookList";
import ProductList from "./component/forms/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Compnies" element={<Compnies />} />
        <Route exact path="/ShowAllPerson" element={<ShowAllPerson />} />
        <Route exact path="/Animal" element={<Animal />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/AnimalImage" element={<AnimalImage />} />
        <Route exact path="/AnimalPokemon" element={<AnimalPokemon />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/ImageCategory" element={<ImageCategory />}>
          <Route index element={<Laptops />} />
          <Route path="laptop" element={<Laptops />} />
          <Route path="books" element={<Books />} />
        </Route>
        <Route exact path="/RandomImage" element={<RandomImage />}></Route>
        <Route exact path="/BookList" element={<BookList />}></Route>
        <Route exact path="/ProductList" element={<ProductList />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
