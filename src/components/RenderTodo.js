import React from "react";
import { useSelector } from "react-redux";
import { selectValue } from "../features/todo/todoSlice";

export default function RenderTodo({ category }) {
  const values = useSelector(selectValue);
  console.log(values[category]);

  const colors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-teal-400",
  };

  return (
    <div>
      <div className="">
        {values[category].map((key) => (
          <div className="my-2 border border-white rounded-md p-2">
            <div className="flex justify-between p-[0.5rem] items-center">
              <div>{key.todo}</div>
              <div
                className={colors[key.importance] + " p-[0.50rem] rounded-md"}
              >
                {key.importance}
              </div>
            </div>
            <div className="text-gray-300 mx-4">{key.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
