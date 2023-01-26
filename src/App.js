import { useState } from "react";

var levelData = require("./data/cognitive_level_data.json");

function App() {
  const [level, setLevel] = useState("");

  const levelHandler = (e) => {
    console.log(e.target.value);
    for (const object of levelData) {
      if (object.keywords.indexOf(e.target.value.toLowerCase())) {
        setLevel(object.level);
        break;
      }
    }
  };

  console.log(level);
  return (
    <div className="App bg-slate-200">
      <div className="p-12">
        <input
          className="border mb-5 p-3 rounded-md focus:outline-none"
          placeholder="Course Code"
          type="text"
        />
        <div className="flex items-center">
          <textarea
            className="border rounded-md p-5 w-2/3 focus:outline-none"
            name="questions"
            placeholder="Question"
            onChange={levelHandler}
          ></textarea>
          <h1 className="text-2xl">[{level}]</h1>
        </div>
        <input
          className="border p-3 rounded-md focus:outline-none"
          placeholder="Enter Cognitive Level"
          type="text"
        />
      </div>
    </div>
  );
}

export default App;
