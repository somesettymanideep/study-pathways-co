import { useState, useEffect } from "react";
import { Plane } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      aria-label="Scroll to top"
    >
      <Plane className="w-7 h-7 text-primary-foreground -rotate-45" />
    </button>
  );
};

export default ScrollToTopButton;
