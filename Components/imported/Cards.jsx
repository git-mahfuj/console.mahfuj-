"use client";
import React from "react";
import CardSwap, { Card } from "./Cardswap";
import { CodeBlock } from "./Codeblock";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="text-white overflow-hidden pb-3 ">
      <div id="Cards" style={{ height: "700px", position: "relative" }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={3000}
          pauseOnHover={false}
        >
          <Card className="">
            <h3 className="border-b border-white px-45 py-5 text-2xl font-medium">{`[ {Code} ]`}</h3>
            <div>
              <CodeBlock
                code={`import React from 'react';
import { useState } from "react";

const DummyComponent = () => {
  const [task, setTask] = useState();


  const addTask = > () {
    settask(prev => [...prev, "New Task"]); 
  }

  return (
    <div className="p-4 border rounded-lg">
      <h2>Todo List</h2>
      <ul>
       
        {task?.map((todo, index) => (
          <li key={index}>{task}</li> // 
        ))}
      </ul>
      <button onClick={AddTask}>Add Task</button> 
    </div>
  );
};
              `}
              />
            </div>
          </Card>
          <Card className="relative">
            <h3 className=" border-b border-white px-45 py-5 text-2xl font-medium text-red-500">
              ! Error
            </h3>
            <CodeBlock
              code={`import React from 'react';
import { useState } from "react";

const DummyComponent = () => {
  const [task, setTask] = useState(); 
  // 🟥 ❌ Missing initial value — should be useState([])

  const addTask = > () {
    settask(prev => [...prev, "New Task"]);
    // 🟥 ❌ Arrow function broken + 'settask' undefined
  }

  return (
    <div className="p-4 border border-red-500 bg-gray-950 rounded-lg text-red-400 font-mono">
      <h2>🪓 Terminal List - unstable</h2>
      <ul>
        {task?.map((todo, index) => (
          <li key={index}>log@{index} → {task}</li>
          // 🟥 ❌ Should display 'todo' not 'task'
        ))}
      </ul>
      <button onClick={AddTask}>⚠️ Inject Bug</button>
      {/* 🟥 ❌ 'AddTask' is undefined — casing mismatch */}
    </div>
  );
}
            `}
            />
          </Card>

          <Card className="">
            <h3 className="text-green-500 border-b border-white px-45 py-5 text-2xl font-medium">
              Fix {`</>`}
            </h3>
            <CodeBlock
              code={`import React, { useState } from "react";
const DummyComponent = () => {
  
const [task, setTask] = useState([]); 
  // ✅ Added default empty array

  const addTask = () => {
    setTask(prev => [...prev, "New Task"]); 
    // ✅ Correct arrow function & casing
  };

  return (
    <div className="p-4 border border-green-500 bg-gray-950 rounded-lg text-green-400 font-mono">
      <h2>Todo List</h2>
      <ul className="mb-4">
        {task.map((todo, index) => (
          <li key={index}>log@{index} → {todo}</li> // ✅ Correct variable usage
        ))}
      </ul>
      <button 
        onClick={addTask} 
        className="px-3 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
      >
        Inject Task ✅
      </button>
    </div>
  );
};

export default DummyComponent;`}
            />
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default Cards;
