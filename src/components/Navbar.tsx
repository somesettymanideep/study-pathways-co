import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";

const studyAbroad = [
  { name: "Masters", path: "/masters" },
  { name: "Bachelors", path: "/bachelors" },
  { name: "MBBS", path: "/mbbs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isStudyActive = studyAbroad.some((d) => location.pathname === d.path);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Pravaas International Education Consultancy" className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <NavItem to="/" active={isActive("/")}>Home</NavItem>
          <NavItem to="/about" active={isActive("/about")}>About</NavItem>
          
          {/* Study Abroad dropdown */}
          <div className="relative group">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                isStudyActive ? "text-primary bg-secondary" : "text-foreground hover:text-primary hover:bg-secondary"
              }`}
            >
              Study Abroad <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card rounded-xl border border-border shadow-elevated p-2 min-w-[200px]">
                {studyAbroad.map((dest) => (
                  <Link
                    key={dest.path}
                    to={dest.path}
                    className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                      isActive(dest.path) ? "text-primary bg-secondary" : "text-foreground hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavItem to="/services" active={isActive("/services")}>Services</NavItem>
          <NavItem to="/contact" active={isActive("/contact")}>Contact</NavItem>
          <Link
            to="/contact"
            className="ml-3 px-5 py-2.5 bg-hero-gradient text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <MobileNavItem to="/" active={isActive("/")} onClick={() => setIsOpen(false)}>Home</MobileNavItem>
            <MobileNavItem to="/about" active={isActive("/about")} onClick={() => setIsOpen(false)}>About</MobileNavItem>
            
            <button
              onClick={() => setDestOpen(!destOpen)}
              className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-secondary"
            >
              Study Abroad <ChevronDown className={`w-4 h-4 transition-transform ${destOpen ? "rotate-180" : ""}`} />
            </button>
            {destOpen && studyAbroad.map((dest) => (
              <MobileNavItem key={dest.path} to={dest.path} active={isActive(dest.path)} onClick={() => setIsOpen(false)} className="pl-8">
                {dest.name}
              </MobileNavItem>
            ))}

            <MobileNavItem to="/services" active={isActive("/services")} onClick={() => setIsOpen(false)}>Services</MobileNavItem>
            <MobileNavItem to="/contact" active={isActive("/contact")} onClick={() => setIsOpen(false)}>Contact</MobileNavItem>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-3 bg-hero-gradient text-primary-foreground text-sm font-semibold rounded-lg text-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
      active ? "text-primary bg-secondary" : "text-foreground hover:text-primary hover:bg-secondary"
    }`}
  >
    {children}
  </Link>
);

const MobileNavItem = ({ to, active, onClick, children, className = "" }: {
  to: string; active: boolean; onClick: () => void; children: React.ReactNode; className?: string;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
      active ? "text-primary bg-secondary" : "text-foreground hover:bg-secondary"
    } ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;
