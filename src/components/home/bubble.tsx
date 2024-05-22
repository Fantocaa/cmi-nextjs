import React, { useEffect, useRef } from "react";
import "./css/bubble.css";

const Bubble: React.FC = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div className="interactive" ref={interBubbleRef}></div>;
};

export default Bubble;
