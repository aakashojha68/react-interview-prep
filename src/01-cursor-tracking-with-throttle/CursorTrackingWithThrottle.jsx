import { useRef } from "react";

/*
🟠 Problem Statement:

Build a visual cursor tracker using React that displays a small circle (dot) which follows the user's mouse pointer as it moves across the screen.

🧩 Requirements:
1. Render a small circle (dot) on the screen.
2. The dot should follow the mouse pointer in real-time as the user moves it.
3. Improve performance by implementing throttling:
   - Prevent repeated executions of the update logic while a previous one is still in progress.
4. Add support for:
   - Preceding: Whether the dot should move immediately on the first movement.
   - Trailing: Whether the dot should make a final move at the end of throttled movement.

⚙️ Additional Notes:
- Both trailing and preceding behaviors should be configurable via boolean flags.
- Keep the movement smooth and responsive, avoiding UI lag or jank.

Optional:
- Add styles or animations (like ease-in-out) to make the movement visually appealing.
*/

const CursorTrackingWithThrottle = () => {
  const dotRef = useRef(null);
  const lastCallTimeRef = useRef(0); // stores last handler run time
  const timerId = useRef(null); // stores last handler run time
  const delay = 20; // ms

  const trailing = true;
  const preceeding = true;

  const moveMouse = (pageX, pageY) => {
    if (dotRef.current) {
      dotRef.current.style.left = `${pageX}px`;
      dotRef.current.style.top = `${pageY}px`;
    }
  };

  const handleMouseMove = (e) => {
    const now = Date.now();

    if (!preceeding && lastCallTimeRef.current === 0) {
      lastCallTimeRef.current = now;
    }

    if (now - lastCallTimeRef.current >= delay) {
      if (timerId.current !== null) {
        clearTimeout(timerId.current);
        timerId.current = null;
      }
      moveMouse(e.pageX, e.pageY);
      lastCallTimeRef.current = now;
    } else if (trailing && timerId.current === null) {
      timerId.current = setTimeout(() => {
        moveMouse(e.pageX, e.pageY);
        lastCallTimeRef.current = now;
      }, delay);
    }
  };

  return (
    <div
      className="relative w-full h-dvh border-2 border-red-400"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={dotRef}
        className="absolute w-2.5 h-2.5 rounded-full bg-red-600 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default CursorTrackingWithThrottle;
