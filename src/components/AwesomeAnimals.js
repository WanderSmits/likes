import React from "react";

export default function AwesomeAnimals() {
  return (
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <ul>
              <li>
                Awesomenes level {index + 1}: {animal}
              </li>
            </ul>
          );
        }
      )}
    </div>
  );
}
