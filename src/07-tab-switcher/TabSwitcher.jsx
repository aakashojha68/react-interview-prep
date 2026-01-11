import React, { useState } from "react";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (i) => {
    setSelectedTabIndex(i);
  };

  return (
    <div className="p-4">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="mt-4 flex gap-4">
        {tabs.map((tab, i) => {
          return (
            <button
              className={`px-4 ${
                i === selectedTabIndex
                  ? "border border-b-0 rounded-tr-xl rounded-tl-xl"
                  : "cursor-pointer"
              }`}
              data-testid={`tab-button-${tab.id}`}
              onClick={() => handleTabClick(i)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        className="border h-[300px] flex justify-center items-center"
        data-testid="tab-content"
      >
        {tabs?.[selectedTabIndex]?.content}
      </div>
    </div>
  );
}
