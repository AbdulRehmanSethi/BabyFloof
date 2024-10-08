import { useEffect } from "react";
import "../../App.css"; // The CSS file for styling the particles

const CursorAnimation = () => {
  useEffect(() => {
    // Add the mousemove event listener
    const handleMouseMove = (e) => {
      createCrackers(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function createCrackers(x, y) {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      createParticle(x, y);
    }
  }

  function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Get random color for particle
    particle.style.background = getRandomColor();

    // Random angle and speed for particle
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 50;

    // Applying angle and speed for particle movement
    particle.style.setProperty("--dx", `${Math.cos(angle) * speed}px`);
    particle.style.setProperty("--dy", `${Math.sin(angle) * speed}px`);

    // Append particle to body (not to any specific container)
    document.body.appendChild(particle);

    // Remove particle after animation ends
    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }

  function getRandomColor() {
    const colors = [
      "#ff5e5e", // Bright Red
      "#ff5e5e", // Bright Red
      "#ffb35e", // Orange
      "#ffdf5e", // Yellow
      "#5effa3", // Bright Green
      "#5ed8ff", // Sky Blue
      "#ff5edf", // Pink
      "#a35eff", // Purple
      "#ff5e91", // Hot Pink
      "#5effd4", // Mint Green
      "#ff865e", // Coral
      "#ffcc5e", // Light Orange
      "#5e8bff", // Bright Blue
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return null; // No JSX is needed for this animation
};

export default CursorAnimation;
