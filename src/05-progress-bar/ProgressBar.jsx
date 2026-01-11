import { useState } from "react";

/**
 * 🧩 Problem Statement: Build a Dynamic Progress Bar Component
 *
 * 1. Create a React component with a progress bar that visually fills based on a percentage state (0 to 100).
 *
 * 2. Include two buttons:
 *    - "+10%": Increments the progress by 10 (max 100).
 *    - "-10%": Decrements the progress by 10 (min 0).
 *
 * 3. The inner progress bar should:
 *    - Animate width change smoothly using transition.
 *    - Dynamically change color based on percentage:
 *        - 0–39%   => Red    (bg-red-500)
 *        - 40–79%  => Orange (bg-orange-500)
 *        - 80–100% => Green  (bg-green-500)
 *    - Show rounded corners only on the left, except at 100%, where all corners should be rounded.
 *
 * 4. Display the current percentage value above the progress bar.
 *
 * 5. Use Tailwind CSS for styling.
 */

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
