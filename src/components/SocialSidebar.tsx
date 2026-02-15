import { useState, useEffect } from "react";
import { Facebook, Youtube, Twitter, Linkedin } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://facebook.com", bg: "bg-[#1877F2]" },
  { icon: Youtube, href: "https://youtube.com", bg: "bg-[#FF0000]" },
  { icon: Twitter, href: "https://twitter.com", bg: "bg-[#1DA1F2]" },
  { icon: Linkedin, href: "https://linkedin.com", bg: "bg-[#0A66C2]" },
];

const SocialSidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 transition-all duration-300 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      {socials.map(({ icon: Icon, href, bg }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${bg} w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
        >
          <Icon className="w-5 h-5" fill="white" strokeWidth={0} />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
