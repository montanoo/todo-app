import React, { useState } from "react";
import CollectionModal from "../../components/CollectionModal";
import TodoCollection from "../../components/TodoCollection";
import TodoSideBar from "../../components/TodoSideBar";
import TodoTopBar from "../../components/TodoTopBar";

export default function Todo() {
  const [showSide, setShowSide] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState();

  const toggleModal = (status) => setShowModal(status);
  const toggleSide = () => setShowSide(!showSide);
  const toggleCategory = (categ) => setCategory(categ);

  return (
    <div className="h-screen flex flex-col">
      {/* Top bar styles, sending two parameters to modify this component state. */}
      <div className="z-0 drop-shadow-2xl grow-0 shrink basis-auto border-b-4 border-b-[#181820]">
        <TodoTopBar showSide={toggleSide} toggleModal={toggleModal} />
      </div>
      <div className="z-0 grow shrink basis-auto h-screen flex">
        {showSide && (
          <div
            className={`text-white bg-[#21212b] sm:w-3/6 w-1/6 h-full rounded ${
              showSide ? "animate-inAnimation" : "animate-outAnimation"
            }`}
          >
            <TodoSideBar setCategory={toggleCategory} />
          </div>
        )}
        {showModal && (
          <div>
            <CollectionModal toggle={toggleModal} />
          </div>
        )}
        <TodoCollection
          selectedCategory={category}
          setCategory={toggleCategory}
        />
      </div>
    </div>
  );
}
