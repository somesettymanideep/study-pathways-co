import { useState, useEffect } from "react";
import { Facebook, Youtube, Twitter, Linkedin } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://facebook.com", bg: "bg-[#1877F2]", isYoutube: false },
  { icon: Youtube, href: "https://youtube.com", bg: "bg-[#FF0000]", isYoutube: true },
  { icon: Twitter, href: "https://twitter.com", bg: "bg-[#1DA1F2]", isYoutube: false },
  { icon: Linkedin, href: "https://linkedin.com", bg: "bg-[#0A66C2]", isYoutube: false },
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
      {socials.map(({ icon: Icon, href, bg, isYoutube }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${bg} w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
        >
          {isYoutube ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          ) : (
            <Icon className="w-5 h-5" fill="white" strokeWidth={0} />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
