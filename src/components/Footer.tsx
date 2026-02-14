import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="relative text-background">
      <img src={footerBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-foreground/90" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Pravaas International" className="h-14 w-auto rounded-lg" />
              <h3 className="font-heading text-2xl font-bold">Pravaas International</h3>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted partner for international education. We guide students towards globally recognized degrees and successful careers abroad.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Study in UK", path: "/study-in-uk" },
                { label: "Study in Australia", path: "/study-in-australia" },
                { label: "Study in Canada", path: "/study-in-canada" },
                { label: "Study in Germany", path: "/study-in-germany" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Pravaas International Education Consultancy</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+910000000000" className="hover:text-primary transition-colors">+91 00000 00000</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@pravaasinternational.com" className="hover:text-primary transition-colors">info@pravaasinternational.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-accent-foreground bg-accent rounded-lg py-4 px-6 font-medium">
          © {new Date().getFullYear()} Pravaas International Education Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
