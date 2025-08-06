import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fadeIn">
        <h1 className="text-display mb-4">404</h1>
        <p className="text-subhead text-muted-foreground mb-8">Oops! Page not found</p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
