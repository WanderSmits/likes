// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState([]);

  const deleteArticles = () => {
    set_articles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      // Getting back data from the net, through the wire, air, and the ocean:
      await Timeout.set(2000);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("Got back:", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []); // all the effect your effect depends on

  return (
    <div>
      <button onClick={deleteArticles}>Clear notifications!</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map(article => {
        return <ArticleCard title={article.title} content={article.body} />;
      })}
    </div>
  );
}

/*    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!"
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders"
    } */
