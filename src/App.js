import React from "react";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";
import ArticleCard from "./components/ArticleCard";

function App() {
  return (
    <main>
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
      <ArticleCard />
    </main>
  );
}

export default App;
