import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import footerBg from "@/assets/footer-bg.jpg";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="relative text-background">
      <img src={footerBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-foreground/90" />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Pravaas International" className="h-14 w-auto rounded-lg" />
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted partner for international education. We guide students towards globally recognized degrees and successful careers abroad.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1AT1j1Ljys/" },
                { Icon: Instagram, href: "https://www.instagram.com/pravaasinternational?igsh=Z2lzMTNuaGt2NXVi" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4">Study Abroad</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Masters", path: "/masters" },
                { label: "Bachelors", path: "/bachelors" },
                { label: "MBBS", path: "/mbbs" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>SS Complex, Above Hyundai Car Showroom, Vidyanagar, Bhadradri Kotthagudem, Telangana, 507101</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+918008249666" className="hover:text-accent transition-colors">+91 80082 49666</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@pravaasinternational.com" className="hover:text-accent transition-colors">info@pravaasinternational.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
      <div className="relative w-full text-center text-sm text-primary-foreground bg-accent py-4 px-6 font-medium">
        © {new Date().getFullYear()} Pravaas International Education Consultancy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
