import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCollection } from "../features/todo/todoSlice";

export default function CollectionModal({ toggle }) {
  const [collection, setCollection] = useState();
  const dispatch = useDispatch();

  const newCollection = () => {
    dispatch(addCollection(collection));
  };

  const preventSubmit = (e) => {
    e.preventDefault();
    newCollection();
    toggle(false);
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-20 flex justify-center align-center items-center text-[#b9b9bc]">
      <div className="bg-[#21212b] rounded-lg">
        <div className="p-6 flex flex-col">
          <div className="rounded-full flex justify-between pb-4">
            <div className="pr-10 text-2xl font-bold">Add Todo Collection</div>
            <div
              className="w-7 h-7 bg-red-500 rounded-full cursor-pointer"
              onClick={() => toggle(false)}
            ></div>
          </div>
          <form onSubmit={preventSubmit}>
            <label className="block pt-2 pb-1 font-bold">Collection name</label>
            <input
              type="text"
              id="collection-name"
              placeholder="School"
              className="rounded-lg bg-[#333342] p-2 border border-[#b9b9bc] w-full"
              onChange={(e) => setCollection(e.target.value)}
              required
            />
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
