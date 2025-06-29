import { useEffect, useState } from "react";

/*
🧩 Problem: Build a Dynamic Greeting App
Create a small app in React that shows a greeting message and the current time. The greeting should change automatically based on the time of day.

✅ Requirements
Show the Current Time

Use JavaScript's toLocaleTimeString() method to display the current time.

The time should update every second (like a digital clock).

Display a Greeting Based on Time

Between 5 AM to 12 PM → Show "Good Morning! ☀️"

Between 12 PM to 5 PM → Show "Good Afternoon! 🌤️"

Between 5 PM to 9 PM → Show "Good Evening! 🌆"

Between 9 PM to 5 AM → Show "Good Nigth! 🌙✨"

Auto Update

The greeting and time should update on their own without needing a refresh.

*/

const DynamicGreetingApp = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const generateText = () => {
    const hr = date.getHours();
    if (hr >= 5 && hr < 12) {
      return "Good Morning! ☀️";
    } else if (hr >= 12 && hr < 17) {
      return "Good Afternoon! 🌤️";
    } else if (hr >= 17 && hr < 21) {
      return "Good Evening! 🌆";
    } else {
      return "Good Night! 🌙✨";
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className=" bg-white rounded p-6 text-center">
        <h1>{generateText()}</h1>
        <h1 className="mt-4">
          {date.toLocaleTimeString(["en-IN"], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </h1>
      </div>
    </div>
  );
};

export default DynamicGreetingApp;

/*

key learning:
toLocaleTimeString inbuilt function on date.

*/
