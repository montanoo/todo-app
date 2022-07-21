import React, { useState } from "react";
import CollectionModal from "../../components/CollectionModal";
import TodoSideBar from "../../components/TodoSideBar";
import TodoTopBar from "../../components/TodoTopBar";

export default function Todo() {
  const [showSide, setShowSide] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (status) => setShowModal(status);
  const toggleSide = () => setShowSide(!showSide);
  return (
    <div className="h-screen">
      <div className="h-screen flex flex-col">
        <div className="z-10 drop-shadow-xl grow-0 shrink basis-auto ">
          <TodoTopBar showSide={toggleSide} toggleModal={toggleModal} />
        </div>
        {showSide && (
          <div
            className={`text-white z-0 grow shrink basis-auto bg-[#21212b] sm:w-3/6 w-3/12 h-screen  ${
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
    </div>
  );
}
