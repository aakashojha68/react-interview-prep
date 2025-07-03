import { useState } from "react";

function ProgressBar() {
  const INCREMENT_VALUE = 10;
  const DECREMENT_VALUE = 10;
  const [colorFilledPer, setColorFilledPer] = useState(0);

  const handleIncrement = () => {
    const value = colorFilledPer + INCREMENT_VALUE;

    setColorFilledPer(value > 100 ? 100 : value);
  };

  const handleDecrement = () => {
    const value = colorFilledPer - DECREMENT_VALUE;

    setColorFilledPer(value <= 0 ? 0 : value);
  };

  const getBgColor = () => {
    if (colorFilledPer < 40) {
      return "bg-red-500";
    } else if (colorFilledPer < 80) {
      return "bg-orange-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center pt-6">
      {/* Implement the ProgressBar component logic here */}
      <div className="bg-white rounded p-6 h-fit mt-6 w-dvh sm:w-auto mx-4 sm:mx-0">
        <h1 className="mb-2 text-gray-600">Progress Bar</h1>
        <div className="border border-gray-400  sm:w-xl md:w-3xl  h-6 mb-4 rounded-2xl relative">
          <div
            id="testBgColor"
            style={{
              width: `${colorFilledPer}%`,
              height: "100%",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: colorFilledPer === 100 ? 10 : 0,
              borderTopRightRadius: colorFilledPer === 100 ? 10 : 0,
              transition: "width 0.3s ease-in-out",
            }}
            // style={{backgroundColor: }}
            className={`${getBgColor()} `}
          ></div>
          <div className=" relative bottom-6 font-bold text-center">
            {colorFilledPer}%
          </div>
        </div>
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-amber-400 hover:bg-amber-200 rounded cursor-pointer text-gray-600"
        >
          -10%
        </button>
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-amber-400 hover:bg-amber-200 rounded cursor-pointer ml-2 text-gray-600"
        >
          +10%
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
