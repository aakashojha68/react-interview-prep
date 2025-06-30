/*
 Problem Statement: Advanced Sidebar Navigation with Dynamic Toggle and Backdrop

 Design and build a responsive, animated Sidebar Navigation Component using React and Tailwind CSS
 that offers a smooth user experience and accessibility enhancements.

 ✅ Requirements:

 1. Sidebar Behavior
    - The sidebar should be hidden by default and slide in from the left when toggled.
    - The sidebar width should be dynamic (w-fit) to adjust based on its content.
    - The sidebar should close when:
        - The user presses the Escape key.
        - The user clicks outside on a semi-transparent backdrop.

 2. Toggle Button
    - Display a floating circular Menu icon to open/close the sidebar.
    - When the sidebar opens, the toggle button should move right to align with the sidebar's outer edge.
    - Dynamically calculate the sidebar width using ref and adjust the toggle button's position accordingly.
    - Swap the Menu icon with a Close (X) icon when the sidebar is open.

 3. Navigation Links
    - Render a list of navigation items: Home, Contacts, Services, About.
    - On hover, each item should display a smooth left-to-right underline animation using the after: pseudo-class in Tailwind.

 4. Backdrop
    - When the sidebar is open, a semi-transparent dark backdrop should appear behind it.
    - Clicking the backdrop should close the sidebar.
    - Ensure smooth fade-in and fade-out transitions for the backdrop.

 📌 Constraints:
 - Use React functional components with Hooks (useState, useRef, useEffect).
 - Only use Tailwind CSS for styling and transitions.
 - Do not use external libraries for animation or modals.
*/

import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const ref = useRef(null);

  const handleOnKeyDown = (e) => {
    if (isOpen && e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen && ref.current) {
      setSidebarWidth(ref.current.offsetWidth);
    }

    document.addEventListener("keydown", handleOnKeyDown);

    return () => {
      document.removeEventListener("keydown", handleOnKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full relative">
      <button
        onClick={handleClose}
        className={`m-2 rounded-full border-gray-50 p-2 bg-blue-200 shadow cursor-pointer fixed z-20 top-4
            transition-all duration-300 ease-in-out `}
        style={{ left: isOpen ? `${sidebarWidth}px` : "1rem" }}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 transition-opacity duration-300"
        />
      )}

      <nav
        ref={ref}
        className={`fixed top-0 left-0 z-10 min-h-screen w-fit bg-blue-200 px-8 pt-12 
          transition-transform origin-left duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul>
          {["Home", "Contacts", "Services", "About"].map((item) => (
            <li
              key={item}
              className="w-fit relative my-4 pe-2 cursor-pointer
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:h-[2px] after:w-full after:bg-blue-500
              after:scale-x-0 after:transition-transform after:origin-left after:duration-300 
              hover:after:scale-x-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
