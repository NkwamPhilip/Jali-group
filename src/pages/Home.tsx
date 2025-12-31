import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/ui/SEOHead";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import CTASection from "@/components/sections/CTASection";
import CaseStudySection from "@/components/sections/CaseStudySection";

const Home = () => {
  return (
    <Layout>
      <SEOHead />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InsightsSection />
      <CaseStudySection />
      <CommunitySection />
      <CTASection />
    </Layout>
  );
};

export default Home;
