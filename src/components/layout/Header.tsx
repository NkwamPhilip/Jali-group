import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for glass effect transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Jali Varsity", href: "/courses" },
    { name: "Industry Leader", href: "/services" },
    { name: "WAMC", href: "/wamc" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-4",
        scrolled ? "md:py-4" : "md:py-8"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto transition-all duration-500 px-6 py-3 rounded-full border",
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Minimalist Serif/Sans hybrid feel */}
          <Link
            to="/"
            className="text-white text-lg font-black tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
          >
            Jali<span className="text-white/40">Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group",
                  location.pathname.startsWith(item.href) ? "text-white" : "text-white/40 hover:text-white"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-white transition-all duration-300",
                  location.pathname.startsWith(item.href) ? "w-4" : "w-0 group-hover:w-4"
                )} />
              </Link>
            ))}
          </nav>

          {/* Action Button - The Sharp White Pill */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              Contact Us <ArrowRight size={12} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={cn(
        "fixed inset-0 bg-black z-[-1] transition-all duration-700 flex flex-col items-center justify-center gap-8 md:hidden",
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        {navigation.concat({ name: "Contact", href: "/contact" }).map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl font-bold uppercase tracking-tighter hover:italic transition-all"
          >
            {item.name}
          </Link>
        ))}
        <div className="absolute bottom-12 text-white/20 text-[10px] uppercase tracking-[0.5em] font-black">
          Jali Group © 2026
        </div>
      </div>
    </header>
  );
};

export default Header;