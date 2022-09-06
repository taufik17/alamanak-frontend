import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import AddRecipe from "../src/pages/AddRecipe";
import PageNotFound from "../src/pages/NotFound";
import Search from "../src/pages/Search";
import DetailRecipe from "../src/pages/DetailRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/*NOT AUTHENCTICATION PAGES */}
          <Route index element={<Home />} /> { /*Conditional menu */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="search/:keyword" element={<Search />} />
          <Route path="detailrecipe/:id" element={<DetailRecipe />} />

          {/* AUTHENCTICATION PAGES */}
          <Route path="profile" element={<Profile />} />
          <Route path="addRecipe" element={<AddRecipe />} />


          {/* AUTH PAGES */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
