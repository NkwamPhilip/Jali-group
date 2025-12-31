import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail, ArrowUpRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/jaliafrica", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/jaliafrica", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/jaliafrica", icon: Youtube },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "About", href: "/about" },
        { name: "Jali Varsity", href: "/courses" },
        { name: "Industry Leader", href: "/services" },
        { name: "WAMC", href: "/wamc" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legals",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Large Branding & CTA */}
        <div className="grid lg:grid-cols-2 gap-20 mb-24 items-start">
          <div>
            <Link to="/" className="inline-block group">
              <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 group-hover:italic transition-all duration-500">
                Jali <span className="text-white/20">Group</span>
              </h2>
            </Link>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-md mb-12">
              Transforming individual potential into market dominance.
              The world is watching—make it worth seeing.
            </p>

            {/* Newsletter / Contact Quick Action */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@jaliafrica.com"
                className="bg-white text-black rounded-full px-8 py-4 font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-white/90"
              >
                Get In Touch
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Active Globally</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-8">{column.title}</h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/50 hover:text-white transition-colors duration-300 text-xs font-bold uppercase tracking-widest group flex items-center gap-2"
                      >
                        {link.name}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Socials Column */}
            <div>
              <h3 className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Social</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="text-white/50 hover:text-white transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-3"
                  >
                    <social.icon size={16} strokeWidth={1.5} />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Huge Background Text Overlay (Branding) */}
        <div className="relative h-20 md:h-40 pointer-events-none select-none overflow-hidden mb-12">
          <h1 className="text-[12rem] md:text-[22rem] font-black text-white/[0.02] absolute left-1/2 -translate-x-1/2 -bottom-20 uppercase tracking-tighter whitespace-nowrap">
            Jali Group
          </h1>
        </div>

        {/* Bottom Bar: Detailed Stats / Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.3em]">
              © {currentYear} JALI GROUP. ALL RIGHTS RESERVED.
            </p>
            <div className="hidden md:flex items-center gap-2 text-[9px] text-white/10 font-bold uppercase tracking-[0.3em]">
              <Globe size={10} />
              Lagos / London / Global
            </div>
          </div>

          <p className="text-[9px] text-white/10 font-medium tracking-[0.2em] uppercase max-w-xs text-center md:text-right">
            Designed for those who understand that being known is not enough. Being remembered is everything.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;