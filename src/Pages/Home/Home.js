import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Home = () => {
  const news = useLoaderData();
  return <Category news={news}></Category>;
};

export default Home;
