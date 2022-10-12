import React from "react";
import AddTodoButton from "./AddTodoButton";
import RenderTodo from "./RenderTodo";

export default function TodoCollection({ selectedCategory }) {
  return (
    <div className="flex justify-center text-white w-full mt-14 ">
      <div className=" w-5/12   ">
        <div className="">
          <div className="font-bold ">
            {selectedCategory && (
              <div className="flex flex-col">
                <div className="flex justify-between text-xl">
                  <div>{selectedCategory}</div>
                  <div className="cursor-pointer">
                    <div>...</div>
                  </div>
                </div>
                <div>
                  <AddTodoButton category={selectedCategory} />
                </div>
                <div>
                  <RenderTodo category={selectedCategory} />
                </div>
              </div>
            )}
            {!selectedCategory && <div>Select a category</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
