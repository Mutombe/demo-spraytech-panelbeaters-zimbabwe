export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Spraytech Panelbeaters", legalName: "Spraytech Panelbeaters", tagline: "Where Science Meets the Art of Restoration",
    description: "Where Science Meets the Art of Restoration",
    phone: "+263 78 133 1739", phoneRaw: "+263781331739", whatsappNumber: "263781331739", email: "info@spraytechzw.com",
    address: "12 Nuffield Rd, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.5, ratingRounded: 5, reviewCount: 181, established: "2008", yearsExperience: "16+", projectsCompleted: "5000+", employees: "35+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "spraytech-panelbeaters-zimbabwe-consent",
    socialLinks: { facebook: "https://www.facebook.com/spraytechzim/", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "Spraytech", logoLine2: "Panelbeaters" },
  hero: {
    badge: "Zimbabwe's Leading Auto Body Repair Facility",
    titleParts: [{ text: "WHERE SCIENCE " }, { text: "MEETS", highlight: true }, { text: " THE ART OF RESTORATION." }],
    subtitle: "Where Science Meets the Art of Restoration.",
    ctaPrimary: "Book an Assessment", ctaSecondary: "See Our Portfolio", trustBadge: "5,000+ Vehicles",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85", alt: "Spraytech Panelbeaters - professional service" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85", alt: "Spraytech Panelbeaters - professional service" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=85", alt: "Spraytech Panelbeaters - professional service" }
    ],
  },
  stats: [
    { number: "5000+", label: "Vehicles Restored" },
    { number: "16+", label: "Years Experience" },
    { number: "99%", label: "Insurance Approved" },
    { number: "48hr", label: "Express Service" }
  ],
  servicesPreview: [
    { title: "Panel Beating", desc: "Expert body repair using hydraulic frame straightening and precision metalwork to restore structural integrity to factory specifications.", icon: "Wrench" },
    { title: "Spray Painting", desc: "Computer-matched colour formulation and dust-free booth application delivering finishes indistinguishable from original factory paint.", icon: "Star" },
    { title: "Dent Removal", desc: "Paintless dent repair for minor damage -- quick, affordable, and preserves your original factory finish.", icon: "Target" },
    { title: "Insurance Claims", desc: "Direct billing with all major insurers in Zimbabwe. We handle the entire claims process on your behalf.", icon: "ShieldCheck" },
    { title: "Frame Straightening", desc: "Computerised measuring and hydraulic correction for structural damage from serious collisions.", icon: "Ruler" },
    { title: "Full Restoration", desc: "Complete body rebuilds for accident-damaged vehicles. We turn write-offs back into road-worthy machines.", icon: "Rocket" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "Panel Beating", slug: "panel-beating", desc: "Expert body repair using hydraulic frame straightening and precision metalwork to restore structural integrity to factory specifications. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" },
      { title: "Spray Painting", slug: "spray-painting", desc: "Computer-matched colour formulation and dust-free booth application delivering finishes indistinguishable from original factory paint. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
      { title: "Dent Removal", slug: "dent-removal", desc: "Paintless dent repair for minor damage -- quick, affordable, and preserves your original factory finish. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" },
      { title: "Insurance Claims", slug: "insurance-claims", desc: "Direct billing with all major insurers in Zimbabwe. We handle the entire claims process on your behalf. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" },
      { title: "Frame Straightening", slug: "frame-straightening", desc: "Computerised measuring and hydraulic correction for structural damage from serious collisions. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
      { title: "Full Restoration", slug: "full-restoration", desc: "Complete body rebuilds for accident-damaged vehicles. We turn write-offs back into road-worthy machines. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "BMW 5 Series Respray", slug: "bmw--5--series--respray", category: "Respray", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
      { title: "Mercedes C-Class Collision", slug: "mercedes--c-class--collision", category: "Collision", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
      { title: "Toyota Hilux Side Impact", slug: "toyota--hilux--side--impact", category: "Panel Beating", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"] },
      { title: "Range Rover Bumper", slug: "range--rover--bumper", category: "Bumper Repair", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
      { title: "Nissan X-Trail Restoration", slug: "nissan--x-trail--restoration", category: "Full Restoration", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
      { title: "Honda Fit Hail Damage", slug: "honda--fit--hail--damage", category: "PDR", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"] },
      { title: "Ford Ranger Rollover", slug: "ford--ranger--rollover", category: "Collision", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
      { title: "VW Polo Rear-End", slug: "vw--polo--rear-end", category: "Respray", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from Spraytech Panelbeaters. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using Spraytech Panelbeaters for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. Spraytech Panelbeaters sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at Spraytech Panelbeaters went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred Spraytech Panelbeaters to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. Spraytech Panelbeaters sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["Since 2008, Spraytech has been Zimbabwe's benchmark for auto body repair. Our 35-strong team operates from a purpose-built facility on Nuffield Road.", "Over 5,000 vehicles repaired and 181 Google reviews. We combine the precision of science with the artistry of restoration.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why Spraytech", points: [{ title: "181 Five-Star Reviews", desc: "Zimbabwe's highest-rated panel beaters." },{ title: "Downdraft Spray Booth", desc: "Dust-free painting for flawless factory-grade finish." },{ title: "All Insurers Accepted", desc: "Direct billing and full claims management." },{ title: "Manufacturer Trained", desc: "Brand-specific repair certifications." }] },
  featuredProjects: [{ title: "BMW 5 Series Respray", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", category: "Respray" },{ title: "Mercedes C-Class Collision", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", category: "Collision" },{ title: "Toyota Hilux Side Impact", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", category: "Panel Beating" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "12 Nuffield Rd, Harare, Zimbabwe", phone: "+263 78 133 1739", email: "info@spraytechzw.com" },
  ] },
  homeCta: {
    title: "DAMAGED VEHICLE? WE MAKE IT PERFECT.", subtitle: "Zimbabwe's most reviewed panel beaters. 181 reviews and a reputation built on perfection.",
    ctaPrimary: "Book an Assessment", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Spraytech! I need a repair assessment for my vehicle.",
    backgroundImage: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85",
  },
  footer: { description: "Zimbabwe's leading auto body repair facility since 2008.", copyright: "Spraytech Panelbeaters" },
};

export default siteData;
