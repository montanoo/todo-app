import React from "react";

export default function TodoCollection({ selectedCategory, setCategory }) {
  return (
    <div className="flex justify-center text-white w-full mt-14 ">
      <div className=" w-5/12   ">
        <div className="flex justify-between">
          <div className="font-bold text-xl">
            {selectedCategory && <div>{selectedCategory}</div>}
            {!selectedCategory && <div>Select a category</div>}
          </div>
          <div>...</div>
        </div>
      </div>
    </div>
  );
}
