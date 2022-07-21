import React from "react";
import "boxicons";

export default function TodoTopBar({ showSide, toggleModal }) {
  console.log(toggleModal);
  return (
    <div className="flex flex-col">
      <div className="bg-[#21212b] text-[#b3b3b6] ">
        <div className="flex justify-between items-center px-4 py-3">
          <div>
            <div className="flex cursor-pointer" onClick={() => showSide()}>
              <box-icon name="menu" color="#b9b9bc" size="sm"></box-icon>
            </div>
          </div>
          <div className="flex">
            <div
              className="bg-gradient-to-tr from-pink-600 to-fuchsia-300 cursor-pointer rounded-xl"
              onClick={() => toggleModal(true)}
            >
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
    </div>
  );
}
