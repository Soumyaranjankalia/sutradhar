import { useState } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

let nextId = 0;

export default function App() {
  // let arr = [10];

  const [arr, setArr] = useState(10);
  const [state, setState] = useState([arr]);
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setArr(arr + 10);
    console.log("state", state);
    setState([...state, arr]);
  };

  const handleRemove = i => {
    let newArr = [...state];
    newArr.splice(i, 1);
    setState(newArr);
  };

  const handlePlus = () => {
    setDisplay(true);
  };

  const handleSort = () => {
    setDisplay(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-96 h-96 border border-black overflow-y-scroll relative">
        {state.map((el, i) => (
          <div key={i} onClick={handlePlus}>
            <div className="flex">
              <div className="border w-8 border-slate-900 text-center">
                {el}
              </div>

              <input type="text" className="border border-black" />
              <TrashIcon
                onClick={() => handleRemove(i)}
                className={
                  display ? "block hover: cursor-pointer h-5" : "hidden"
                }
              />
            </div>
            <div
              className={
                display ? "block border-b-2 hover: border-black mb-1" : "hidden"
              }
            >
              <button
                onClick={handleClick}
                className="hover:border border-black px-2 text-xs"
              >
                Insert
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end w-full absolute bottom-0">
          <button
            onClick={handleSort}
            className="border bg-blue-700 px-2 py-1 rounded-md text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
