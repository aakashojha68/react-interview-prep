import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SingleAccordian = ({ title, content, isOpen, onHeaderClick }) => {
  return (
    <div style={{ border: "1px solid gray" }}>
      <div
        style={{
          borderBottom: "1px solid gray",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
        onClick={onHeaderClick}
      >
        <h1>{title}</h1>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {isOpen && (
        <div style={{ padding: 10 }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const onHeaderClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!items?.length) {
    return "No items available.";
  }
  return (
    <div>
      {items?.map((item, index) => {
        return (
          <SingleAccordian
            isOpen={index === openIndex}
            title={item.title}
            content={item.content}
            onHeaderClick={() => onHeaderClick(index)}
          />
        );
      })}
    </div>
  );
}

const accordionData = [
  {
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage state efficiently.",
  },
  {
    title: "What is an Accordion?",
    content:
      "An accordion is a UI pattern where content is shown or hidden by clicking on a header, helping save screen space and keep layouts clean.",
  },
  {
    title: "Why use Components?",
    content:
      "Components make your code modular, reusable, and easier to maintain. Each component handles a specific part of the UI.",
  },
  {
    title: "What is State in React?",
    content:
      "State is an object that holds data which can change over time and controls how the component re-renders.",
  },
  {
    title: "What are Props?",
    content:
      "Props are inputs passed from a parent component to a child component, allowing data to flow in one direction.",
  },
  {
    title: "What is useEffect?",
    content:
      "useEffect is a React hook used to perform side effects like API calls, subscriptions, or DOM updates.",
  },
];

const RenderAccordians = () => {
  return <Accordion items={accordionData} />;
};

export default RenderAccordians;
