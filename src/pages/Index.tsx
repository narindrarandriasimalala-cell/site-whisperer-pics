import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PartnersSection from "@/components/home/PartnersSection";
import ContinuitySection from "@/components/home/ContinuitySection";
import BenefitsSection from "@/components/home/BenefitsSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <ContinuitySection />
      <BenefitsSection />
      <BlogPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
