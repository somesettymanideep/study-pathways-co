import { useState, useEffect } from "react";
import { Facebook, Youtube, Linkedin } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/1AT1j1Ljys/", bg: "bg-[#1877F2]", isYoutube: false, isInstagram: false },
  { icon: null, href: "https://www.instagram.com/pravaasinternational?igsh=Z2lzMTNuaGt2NXVi", bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", isYoutube: false, isInstagram: true },
  { icon: Youtube, href: "https://youtube.com", bg: "bg-[#FF0000]", isYoutube: true, isInstagram: false },
  { icon: Linkedin, href: "https://linkedin.com", bg: "bg-[#0A66C2]", isYoutube: false, isInstagram: false },
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
      {socials.map(({ icon: Icon, href, bg, isYoutube, isInstagram }) => (
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
          ) : isInstagram ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          ) : (
            Icon && <Icon className="w-5 h-5" fill="white" strokeWidth={0} />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
