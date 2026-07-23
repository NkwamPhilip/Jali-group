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
import CreatorBusinessLive from "./pages/CreatorBusinessLive";

// New "pricing / fast-track / creator-label" design system
import JaliPricing from "./pages/JaliPricing";
import FastTrack from "./pages/FastTrack";
import CreatorLabel from "./pages/CreatorLabel";

import JaliAbout from "./pages/JaliAbout";
import JaliContact from "./pages/JaliContact";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

// ──────────────────────────────────────────────────────────────────────
//  TEMPORARY "LAUNCHING SOON" GATE
//  While this is `true`, every page shows the "Launching Soon" screen
//  EXCEPT Creator Business Live (reachable at /CBLIVE and /live).
//  ►► TO BRING THE WHOLE SITE BACK ONLINE: set this to `false`. ◄◄
//  (Nothing else needs to change — all the real routes are kept below.)
// ──────────────────────────────────────────────────────────────────────
const LAUNCHING_SOON = false;

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

        {LAUNCHING_SOON ? (
          /* ─── Gated: only Creator Business Live is reachable ─── */
          <Routes>
            <Route path="/cblive" element={<CreatorBusinessLive />} />
            <Route path="/live" element={<CreatorBusinessLive />} />
            {/* every other path shows "Launching Soon" */}
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        ) : (
          /* ─── Full site — normal routes ─── */
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

            {/* Pricing · Fast Track · Creator Label (new design system) */}
            <Route path="/pricing" element={<JaliPricing />} />
            <Route path="/fast-track" element={<FastTrack />} />
            <Route path="/creator-label" element={<CreatorLabel />} />

            {/* Creator Business Live — campaign landing page */}
            <Route path="/cblive" element={<CreatorBusinessLive />} />
            <Route path="/live" element={<CreatorBusinessLive />} />

            {/* About + Contact (new design) */}
            <Route path="/about" element={<JaliAbout />} />
            <Route path="/contact" element={<JaliContact />} />

            {/* Catch-all for 404s */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
