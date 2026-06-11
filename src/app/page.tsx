import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Marquee from "@/components/sections/Marquee";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <AboutPreview />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
