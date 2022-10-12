import React, { useState } from "react";
import AddTodoModal from "./AddTodoModal";

export default function AddTodoButton({ category }) {
  const [showAddModal, setShowAddModal] = useState();
  const updateAddModal = (status) => setShowAddModal(status);

  return (
    <div className="my-4">
      <button
        type="button"
        className="px-4 py-2 text-md text-center bg-pink-400 cursor-pointer rounded-lg"
        onClick={() => setShowAddModal(true)}
      >
        Add Todo Item
      </button>
      {showAddModal && (
        <div>
          <AddTodoModal addModal={updateAddModal} category={category} />
        </div>
      )}
    </div>
  );
}
