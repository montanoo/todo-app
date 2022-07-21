import React, { useState } from "react";
import "boxicons";
import TodoSideBar from "./TodoSideBar";
import CollectionModal from "./CollectionModal";

export default function TodoTopBar() {
  const [showSide, setShowSide] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (status) => setShowModal(status);

  console.log(showModal);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-[#21212b] text-[#b3b3b6] z-10 drop-shadow-xl border-b-[3px] border-b-[#181820] grow-0 shrink basis-auto ">
        <div className="flex justify-between items-center px-4 py-3">
          <div>
            <div
              className="flex cursor-pointer"
              onClick={() => setShowSide(!showSide)}
            >
              <box-icon name="menu" color="#b9b9bc" size="sm"></box-icon>
            </div>
          </div>
          <div className="flex">
            <div
              className="bg-gradient-to-tr from-pink-600 to-fuchsia-300 cursor-pointer rounded-xl"
              onClick={() => setShowModal(!showModal)}
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

      {showSide && (
        <div
          className={`text-white z-0 grow shrink basis-auto bg-[#21212b] sm:w-3/6 w-1/6  ${
            showSide ? "animate-inAnimation" : "animate-outAnimation"
          }`}
        >
          <TodoSideBar />
        </div>
      )}
      {showModal && (
        <div>
          <CollectionModal toggle={toggleModal} />
        </div>
      )}
    </div>
  );
}
