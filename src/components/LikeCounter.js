import React, { useState, useEffect } from "react";
export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); //<- using state!, argument is init value, second is a function

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes + 1);
    set_numLikes(numLikes + 1);
  };
  const reset = () => {
    set_numLikes(0);
  };

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]); //runs by default after every render, by giving it second argument,
  // it only re-run the effect if numLikes changes
  console.log("A render!");
  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
