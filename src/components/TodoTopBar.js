import React, { useState } from "react";
import "boxicons";
import TodoSideBar from "./TodoSideBar";

export default function TodoTopBar() {
  const [showSide, setShowSide] = useState(false);

  return (
    <div className="h-screen">
      <div className="bg-[#21212b] text-[#b3b3b6] fixed w-screen z-10">
        <div className="flex justify-between items-center px-4 py-3">
          <div>
            <div
              className="flex cursor-pointer"
              onClick={() => setShowSide(!showSide)}
            >
              <box-icon name="menu" color="white" size="sm"></box-icon>
            </div>
          </div>
          <div className="flex">
            <div className="bg-gradient-to-tr from-pink-600 to-fuchsia-300 cursor-pointer rounded-xl">
              <div className="p-1 flex font-bold text-white">
                <box-icon
                  name="plus"
                  color="white"
                  size="sm"
                  animation="tada-hover"
                ></box-icon>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="p-1 pl-4 flex font-bold text-white cursor-pointer">
                <box-icon name="search" color="white" size="sm"></box-icon>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="p-1 px-4 flex font-bold text-white cursor-pointer">
                <box-icon name="bell" color="white" size="sm"></box-icon>
              </div>
            </div>
            <div className="rounded cursor-pointer">
              <img
                src="https://source.unsplash.com/WNoLnJo7tS8/"
                alt="man"
                width="30px"
                height="20px"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {showSide && (
        <div
          className={`text-white absolute z-0 h-screen bg-[#21212b] border-t-4 border-t-white ${
            showSide ? "animate-inAnimation" : "animate-outAnimation"
          }`}
        >
          <div className="pt-12">
            <TodoSideBar />
          </div>
        </div>
      )}
      <div className="bg-[#181820] h-sreen w-screen">
        asd
      </div>
    </div>
  );
}
