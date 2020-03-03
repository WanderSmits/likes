import React, { useState } from "react";

export default function LikeButton() {
  const isLiked = "Like this";
  const [value, setState] = useState(isLiked);

  const liked = () => {
    if (value === "Like this") {
      setState("You've liked this. Click to unlike");
    } else {
      setState(`Like this`);
    }
  };
  return (
    <div>
      <p>
        <button onClick={liked}>{value}</button>
      </p>
    </div>
  );
}
