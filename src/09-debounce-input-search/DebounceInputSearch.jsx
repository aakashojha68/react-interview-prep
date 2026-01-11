import React, { useState } from "react";
import useDebounce from "./useDebounce";

const names = [
  "Workflow",
  "Module",
  "Field",
  "Property",
  "Node",
  "Trigger",
  "Action",
  "Condition",
  "Validator",
  "Executor",
];

const DebounceInputSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(names);
  const debounceFilter = useDebounce(filterData, 300);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    debounceFilter(e.target.value);
  };

  function filterData(searchText) {
    const filteredList = names.filter((text) =>
      text.toLowerCase().includes(searchText.toLowerCase().trim())
    );

    setFilteredList(filteredList);
  }

  return (
    <div className="m-4">
      <h1>Debounce Search Input Text</h1>
      <input
        className="border border-black p-2"
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />

      <div>
        {filteredList.map((text, index) => {
          return (
            <div key={index} className="py-1 ">
              <span className="border-b">{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DebounceInputSearch;
