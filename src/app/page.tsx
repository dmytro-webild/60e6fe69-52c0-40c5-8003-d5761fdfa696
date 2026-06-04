"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Remodeling",          id: "#remodeling"},
        {
          name: "Our Expertise",          id: "#expertise"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQs",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Falmouth Home Improvements"
      bottomLeftText="CSL #091167 | HIC #177674"
      bottomRightText="Falmouthhomeimprovements@gmail.com"
      button={{
        text: "Call Us Today",        href: "tel:5083640006"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain"}}
      title="Falmouth Home Improvements"
      description="Professional Carpentry & Remodeling Services for Coastal Properties. With over 30 years of experience, we build to last."
      buttons={[
        {
          text: "Our Services",          href: "#services"},
        {
          text: "Get a Quote",          href: "#contact"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eg290iZx5OVq23vi9yjClHBh9u/uploaded-1780606081733-gf2883nh.jpg"
      imageAlt="Exterior view of a beautifully renovated Falmouth home"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-with-folded-arms-gray-marble-wall_158595-6769.jpg",          alt: "Satisfied client Sarah P."},
        {
          src: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2727.jpg",          alt: "Satisfied client Michael L."},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5065.jpg",          alt: "Satisfied client Emily R."},
        {
          src: "http://img.b2bpic.net/free-photo/man-talking-phone-by-window_23-2148238877.jpg",          alt: "Satisfied client David C."},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-serious-aged-man-with-surfboard-thoughtful-bearded-man-standing-sea-beach-holding-big-wooden-board-looking-camera-health-sport-leisure-activity-aged-people-concept_74855-23475.jpg",          alt: "Satisfied client Jessica F."},
      ]}
      avatarText="Trusted by hundreds of homeowners"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/white-buildings-with-red-roofs-sunlight_181624-5655.jpg",          alt: "Newly installed cedar roof"},
        {
          type: "text",          text: "Built to Withstand Coastal Weather"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/pool-chair_74190-1381.jpg",          alt: "Custom-built outdoor living space"},
        {
          type: "text",          text: "30+ Years of Expertise"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/medium-shot-man-working-roof_23-2149343653.jpg",          alt: "Precision carpentry work in progress"},
        {
          type: "text",          text: "Licensed & Insured Professionals"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/modern-kitchen-island-with-fluted-glass-cabinets-stylish-interior-with-builtin-appliances_169016-72717.jpg",          alt: "Modern home interior renovation"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Crafting Excellence for Over 30 Years"
      description={[
        "With over 30 years of experience serving coastal properties, we specialize in comprehensive carpentry, remodeling, and restoration work designed to withstand challenging weather conditions.",        "From structural framing repairs to complete down-to-the-studs renovations, we handle projects of any scope. Our three decades of experience with wood-frame houses means we've likely encountered—and solved—whatever challenge your home presents."]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Siding & Trim",          description: "We install and repair cedar, Hardie board, and plastic siding with expert attention to rot prevention and weather resistance. Our team chases down rot at its source and performs proper repairs that stand up to wind-driven rain and coastal conditions.",          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13015.jpg"},
        {
          title: "Outdoor Living Spaces",          description: "Custom decks and pergolas, outdoor showers, and weather-resistant construction using premium materials. Enhance your home's exterior with durable and beautiful additions.",          imageSrc: "http://img.b2bpic.net/free-photo/three-shower-niches-ambient-light-stone-minimalism_169016-68895.jpg"},
        {
          title: "Roofing & Weather Protection",          description: "Cedar roofing installation, white cedar siding, skylight installation and repair, windows and doors (replacement and installation), chimney re-flashing, crowns, and re-pointing. Trim replacement in wood or Azek materials.",          imageSrc: "http://img.b2bpic.net/free-photo/long-shot-men-working-roof_23-2149343678.jpg"},
        {
          title: "Custom Finish Work",          description: "Built-in wardrobes, custom bookcases, closet organizers, and entertainment centers. Tailored solutions to maximize space and aesthetic appeal.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-digital-disconnecting-home-by-listening-music-vinyl_23-2150037445.jpg"},
        {
          title: "Full Basement Refinishing",          description: "Suspended ceilings, bulkheads and partition walls, concrete cutting for plumbing access, French drains, basement drainage systems, and sump pump installation. Transform your basement into a functional living space.",          imageSrc: "http://img.b2bpic.net/free-photo/living-room-cute-style_1150-18011.jpg"},
      ]}
      title="Our Specialized Services"
      description="Comprehensive carpentry, remodeling, and restoration, built for coastal durability."
    />
  </div>

  <div id="remodeling" data-section="remodeling">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          brand: "Falmouth Home Improvements",          name: "Full Home Renovation",          price: "Custom Quote",          rating: 5,
          reviewCount: "15+",          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-spacious-interior-design_23-2150378916.jpg",          imageAlt: "Before and after of a full home renovation"},
        {
          id: "2",          brand: "Falmouth Home Improvements",          name: "Modern Kitchen Remodel",          price: "Custom Quote",          rating: 5,
          reviewCount: "12+",          imageSrc: "http://img.b2bpic.net/free-photo/modern-blue-kitchen-with-copper-faucet-stylish-interior-featuring-wooden-countertop-decor_169016-72798.jpg",          imageAlt: "Modern kitchen with new appliances and cabinetry"},
        {
          id: "3",          brand: "Falmouth Home Improvements",          name: "Luxury Bathroom Upgrade",          price: "Custom Quote",          rating: 5,
          reviewCount: "10+",          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-showers-stone-tile-premium-spa_169016-68908.jpg",          imageAlt: "Luxury bathroom with new tiling and fixtures"},
        {
          id: "4",          brand: "Falmouth Home Improvements",          name: "Seamless Home Addition",          price: "Custom Quote",          rating: 5,
          reviewCount: "8+",          imageSrc: "http://img.b2bpic.net/free-photo/view-modern-construction-site_23-2151317320.jpg",          imageAlt: "Exterior view of a newly built home addition"},
        {
          id: "5",          brand: "Falmouth Home Improvements",          name: "Coastal Exterior Facelift",          price: "Custom Quote",          rating: 5,
          reviewCount: "9+",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-front-door-with-blue-violet-wall_23-2149360637.jpg",          imageAlt: "Home exterior with new siding and paint for a coastal look"},
        {
          id: "6",          brand: "Falmouth Home Improvements",          name: "Functional Basement Transformation",          price: "Custom Quote",          rating: 5,
          reviewCount: "7+",          imageSrc: "http://img.b2bpic.net/free-photo/living-room-background-zoom-calls_23-2149684449.jpg",          imageAlt: "Modern finished basement with living area"},
      ]}
      title="Remodeling & Renovation Showcase"
      description="Explore examples of our structural framing repairs and complete down-to-the-studs renovations. Quality craftsmanship that transforms your home."
    />
  </div>

  <div id="expertise" data-section="expertise">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Unrivaled Coastal Home Expertise"
      tag="Decades of Experience"
      metrics={[
        {
          id: "m1",          value: "30+",          description: "Years of Experience"},
        {
          id: "m2",          value: "100s",          description: "Projects Completed"},
        {
          id: "m3",          value: "Coastal",          description: "Weather Ready Solutions"},
        {
          id: "m4",          value: "Certified",          description: "Licensed & Insured"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah P.",          role: "Homeowner, Falmouth",          testimonial: "Falmouth Home Improvements transformed our old, weathered siding. The attention to detail and rot prevention was exceptional. Our home looks brand new and we feel confident it will stand up to the elements for years to come.",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-posing_23-2148497205.jpg"},
        {
          id: "t2",          name: "Michael L.",          role: "Property Manager",          testimonial: "We hired Ed for a custom deck and outdoor shower installation. The craftsmanship is superb, and they used materials specifically designed for coastal durability. It's truly a beautiful and functional addition to our property.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-fashionable-woman-stylish-clothes-glasses-standing-against-skyscraper_613910-20972.jpg"},
        {
          id: "t3",          name: "Emily R.",          role: "Local Resident",          testimonial: "Our cedar roof needed serious repair after a few harsh winters. Falmouth Home Improvements provided a thorough assessment and executed the repair flawlessly. Their expertise in weather protection is unmatched.",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-senior-couple-medium-shot_23-2148962430.jpg"},
        {
          id: "t4",          name: "David C.",          role: "Homeowner, Mashpee",          testimonial: "The custom built-in bookshelves and entertainment center are exactly what we envisioned. Ed's team is incredibly talented, professional, and delivered stunning finish work that elevated our living space.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-mother-hugging-her-children_1098-3722.jpg"},
        {
          id: "t5",          name: "Jessica F.",          role: "Coastal Homeowner",          testimonial: "We undertook a full basement refinishing project, and Falmouth Home Improvements handled everything from French drains to custom walls. The communication was excellent, and the final result exceeded our expectations.",          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1620.jpg"},
      ]}
      title="What Our Clients Say"
      description="Hear from satisfied homeowners about our quality work and dedication to coastal property excellence."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "What areas do you serve?",          content: "We proudly serve coastal properties primarily in Falmouth and surrounding Cape Cod communities, extending our expertise to challenging weather zones."},
        {
          id: "f2",          title: "What is your process for a new project?",          content: "Our process begins with a detailed consultation to understand your vision and assess your home's unique needs. We then provide a comprehensive quote, followed by expert execution with regular updates, ensuring quality from start to finish."},
        {
          id: "f3",          title: "Are you licensed and insured?",          content: "Yes, Falmouth Home Improvements is fully licensed (CSL #091167, HIC Registration #177674) and insured, providing peace of mind for all our clients and projects."},
        {
          id: "f4",          title: "What types of materials do you specialize in?",          content: "We specialize in materials optimized for coastal environments, including cedar, Hardie board, Azek for trim, and other weather-resistant options to ensure durability against wind, rain, and salt."},
        {
          id: "f5",title: "Do you offer free estimates?",content: "Absolutely! We offer free, no-obligation consultations and estimates to discuss your project, assess the scope of work, and provide a transparent breakdown of costs."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/lifestyle-scene-from-community-showing-care-support-from-people_23-2151261185.jpg"
      imageAlt="Residential construction site"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our carpentry, remodeling, and restoration services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Ready to transform your home? Get in touch today for a free consultation. We look forward to hearing about your next project!"
      buttons={[
        {
          text: "Call Us: 508 364 0006",          href: "tel:5083640006"},
        {
          text: "Email Us",          href: "mailto:Falmouthhomeimprovements@gmail.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Exterior Services",              href: "#services"},
            {
              label: "Interior Services",              href: "#services"},
            {
              label: "Remodeling",              href: "#remodeling"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "Our Expertise",              href: "#expertise"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "FAQs",              href: "#faq"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Falmouth Home Improvements. All rights reserved."
      bottomRightText="Built for Coastal Living."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
