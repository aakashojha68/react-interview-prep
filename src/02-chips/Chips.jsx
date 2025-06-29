import { useState } from "react";

/* 
🟠 Problem Statement:

Create a reusable input component where users can type in values and see them displayed as "chips" or tags. Each chip should be individually removable and rendered dynamically as the user interacts with the input.


### 🎯 Features:

1. Input & Add Chips
   - Provide an input box to type in text.
   - On pressing `Enter`, the typed value should be added as a new chip.
   - Do not allow empty or whitespace-only inputs.

2. Display Chips
   - Show the chips in a row, wrapping to the next line if needed.
   - Each chip should be styled and clearly distinguishable.

3. Delete Chips
   - Each chip should have a small `X` or remove button to delete it.
   - Deleting one chip should not remove duplicates of the same value.

*/

const Chips = () => {
  const [text, setText] = useState("");
  const [chips, setChips] = useState(["aakash", "vikas"]); // stores chips

  const handleKeyDown = (e) => {
    if (e.code === "Enter" && text?.trim()) {
      setChips((prev) => [...prev, text]);
      setText("");
    }
  };

  const handleDeleteChip = (index) => {
    const filteredChips = chips.filter((_, i) => i !== index);
    setChips(filteredChips);
  };

  return (
    <div className="min-h-screen">
      <div className="w-3/4 m-auto min-h-screen p-4 flex flex-col items-center mt-6">
        <div>
          <div className="text-end text-sm">
            Note - Press Enter to add chips{" "}
          </div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-1 border-gray-300 p-2 w-96"
            placeholder="Enter text.."
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="flex py-2 flex-wrap gap-2 mt-4">
          {chips?.length > 0 ? (
            chips.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex border-gray-100 bg-gray-200 text-gray-900 px-2 py-1 rounded-2xl items-center"
                >
                  <span className="text-lg">{item}</span>
                  <span
                    className="ml-2 cursor-pointer text-sm"
                    onClick={() => handleDeleteChip(index)}
                  >
                    X
                  </span>
                </div>
              );
            })
          ) : (
            <span>No chips added</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chips;
