import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";

// New Jali Group design
import JaliHome from "./pages/JaliHome";
import JaliTribe from "./pages/JaliTribe";
import CreatorFounder from "./pages/CreatorFounder";
import JaliWamc from "./pages/JaliWamc";

import JaliAbout from "./pages/JaliAbout";
import JaliContact from "./pages/JaliContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast settings for global notifications */}
      <Toaster />
      <Sonner position="bottom-center" expand={false} richColors />

      <BrowserRouter>
        {/* This component ensures the user starts at the top of every new page */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<JaliHome />} />

          {/* The Tribe (replaces Jali Varsity — /courses kept as an alias) */}
          <Route path="/tribe" element={<JaliTribe />} />
          <Route path="/courses" element={<JaliTribe />} />

          {/* Creator-Founder Service (replaces FounderSignal — /services kept as an alias) */}
          <Route path="/founders" element={<CreatorFounder />} />
          <Route path="/services" element={<CreatorFounder />} />

          {/* WAMC Growth Challenge */}
          <Route path="/wamc" element={<JaliWamc />} />

          {/* About + Contact (new design) */}
          <Route path="/about" element={<JaliAbout />} />
          <Route path="/contact" element={<JaliContact />} />

          {/* Catch-all for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
