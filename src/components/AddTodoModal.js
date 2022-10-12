import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/todo/todoSlice";

export default function AddTodoModal({ addModal, category }) {
  const [todoItem, setTodoItem] = useState();
  const [todo, setTodo] = useState();
  const [description, setDescription] = useState();
  const [importance, setImportance] = useState("High");

  const dispatch = useDispatch();
  const preventSubmit = (e) => {
    e.preventDefault();
    console.log(todoItem);
    dispatch(addItem(todoItem));
    addModal(false);
  };

  useEffect(() => {
    setTodoItem({
      category,
      todo,
      description,
      importance,
    });
  }, [todo, description, importance, category]);

  return (
    <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm z-20 flex justify-center align-center items-center text-[#b9b9bc]">
      <div className="bg-[#21212b] rounded-lg">
        <div className="p-6 flex flex-col">
          <div className="rounded-full flex justify-between pb-4">
            <div className="pr-10 text-2xl font-bold">Add Todo Item</div>
            <div
              className="w-7 h-7 bg-red-500 rounded-full cursor-pointer"
              onClick={() => addModal(false)}
            ></div>
          </div>
          <form onSubmit={preventSubmit}>
            <label className="block pt-2 pb-1 font-bold">Todo Title</label>
            <input
              type="text"
              id="collection-name"
              placeholder="School"
              className="rounded-lg bg-[#333342] p-2 border border-[#b9b9bc] w-full"
              onChange={(e) => setTodo(e.target.value)}
              required
            />
            <label className="block pt-2 pb-1 font-bold">Description</label>
            <textarea
              type="text"
              id="collection-name"
              placeholder="Description here"
              className="rounded-lg bg-[#333342] p-2 border border-[#b9b9bc] w-full"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label className="block pt-2 pb-1 font-bold">Importance</label>
            <select
              className="rounded-lg bg-[#333342] p-2 border border-[#b9b9bc] w-full"
              required
              onChange={(e) => setImportance(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <div className="flex justify-end pt-4">
              <div className="bg-emerald-700 rounded-lg text-white font-bold">
                <button className="px-4 py-2" type="submit">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
