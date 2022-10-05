import React from "react";
import { Routes, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import Designs from "../components/Designs";
import Login from "../components/Login";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/designs" element={<Designs />} />
      <Route exact path="/comments/:id" element={<Comments />} />
    </Routes>
  );
}
