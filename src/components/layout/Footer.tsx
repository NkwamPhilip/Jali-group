import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/jaliafrica",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/jaliafrica",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/jaliafrica",
      icon: Youtube,
    },
    {
      name: "Email",
      href: "mailto:hello@jaliafrica.com",
      icon: Mail,
    },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Courses", href: "/courses" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Public Speaking", href: "/services#speaking" },
        { name: "Business Consulting", href: "/services#consulting" },
        { name: "Online Courses", href: "/courses" },
        { name: "1:1 Coaching", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="section-dark section-spacing">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tight mb-4 block hover:opacity-80 transition-opacity"
            >
              Jali Africa
            </Link>
            <p className="text-muted-foreground text-body mb-6 max-w-md">
              Inspiring growth through ideas, talks, and transformation. 
              We help individuals and businesses find their voice and unlock their potential.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card border border-border rounded-md hover:bg-accent hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-small text-muted-foreground">
              © {currentYear} Jali Africa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-small text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-small text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;