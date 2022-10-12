import React, { useState } from "react";
import "boxicons";
import { useSelector } from "react-redux";
import { selectValue } from "../features/todo/todoSlice";

export default function TodoSideBar({ setCategory }) {
  const values = useSelector(selectValue);

  const colors = [
    "bg-teal-500",
    "bg-emerald-400",
    "bg-indigo-400",
    "bg-sky-400",
    "bg-purple-400",
  ];

  const selectColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="flex flex-col justify-between">
      <div>
        <h1 className="text-[#b9b9bc] font-bold px-5 pt-6 pb-2 text-lg">
          Collections
        </h1>
        {Object.keys(values).map((key) => (
          <div
            key={key}
            className="px-5 py-3 my-2 hover:bg-[#272732] flex cursor-pointer"
            onClick={() => setCategory(key)}
          >
            <div className={`rounded-xl ${selectColor()} w-[28px] h-6`}>
              <div className="flex p-1"></div>
            </div>
            <p className="font-bold pl-4 break-all">{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
