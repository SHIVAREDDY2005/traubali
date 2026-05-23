import heroBottle from "../assets/images/bottle_design_fb33059eae.webp";
import heroCardOne from "../assets/images/taru_bali_wellness_products_f5dfebd913.jpg";
import heroCardTwo from "../assets/images/taru_bali_oil_d0726e699d.jpg";
import heroCardThree from "../assets/images/wellness_oil_and_herbal_soap_from_bali_0d78b8c8d6.jpg";
import heroCardFour from "../assets/images/taru_bali_organic_natural_wellness_oil_7db4b9fc4a.jpg";
import heroCardFive from "../assets/images/taru_bali_herbal_soap_21cc038f72.jpg";
import heroCardSix from "../assets/images/organic_unique_wellness_oil_from_bali_866dfe215e.jpg";
import oilMainImage from "../assets/images/tarubalioil_bbd7b6fdcd.jpg";
import oilThumbOne from "../assets/images/ik-thumbnail-2.webp";
import oilThumbTwo from "../assets/images/taru_bali_organic_natural_wellness_oil_7db4b9fc4a.jpg";
import oilThumbThree from "../assets/images/wellness_oil_750d699deb.webp";
import soapMainImage from "../assets/images/taru_bali_soap_93960736ee.jpg";
import soapThumbOne from "../assets/images/organic_soap_and_body_oil_2b14e56488.jpg";
import soapThumbTwo from "../assets/images/taru_bali_soap_2d369d12b2.jpg";
import soapThumbThree from "../assets/images/taru_bali_herbal_soap_21cc038f72.jpg";
import storyBackground from "../assets/images/taru_bali_organic_wellness_oil_b016031873.jpg";
import storyFloatOne from "../assets/images/premium_organic_wellness_oil2_108b8de0e6.jpg";
import storyFloatTwo from "../assets/images/organic_cold_processed_herbal_soap2_0e801ff75b.jpg";
import partnershipImage from "../assets/images/taru_bali_partnerships_aa9b4e870c.jpg";
import borderProper from "../assets/images/border-proper.png";
import certificationOne from "../assets/images/3_f5377d6461.webp";
import certificationTwo from "../assets/images/2_a77642e059.webp";
import halalBadge from "../assets/images/halal_d023a60e4f.webp";
import turmericIllustration from "../assets/images/TURMERIC_7ff0035488.webp";
import redGingerIllustration from "../assets/images/RED_GINGER_2_d31351a270.webp";
import iconHeritage from "../assets/images/balinese_hertiage_76a0670163.png";
import iconExtracts from "../assets/images/herbal_extracts_51a4fc7f1c.png";
import iconMultipurpose from "../assets/images/multipurpose_8a724cc644.png";
import iconPure from "../assets/images/clean_pure_5e7ddea659.png";
import iconMoisturizing from "../assets/images/moisturizing_care_9370fc9168.webp";

// Powers the fullscreen overlay navigation and footer quick links.
export const navMenu = {
  products: [
    { label: "Herbal Body Oil", href: "#oil" },
    { label: "Herbal Soap", href: "#soap" },
    { label: "Benefits", href: "#principles" },
  ],
  navigate: [
    { label: "About", href: "#about" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "The Partnership", href: "#story" },
    { label: "How To Use", href: "#products" },
  ],
  footer: [
    { label: "Contact Us", href: "#footer" },
    { label: "Find Taru Bali in My Region", href: "#story" },
    { label: "Instagram", href: "https://www.instagram.com/tarubaliofficial/" },
    { label: "FAQs", href: "#faqs" },
  ],
};

// Holds the main hero copy, bottle art, and looping image rail content.
export const heroData = {
  logoSrc: "/taru-mark.svg",
  eyebrow: "Natural Ingredients, Botanical Body Oil & Soap",
  title: "BOTANICAL BODY CARE",
  bottle: heroBottle,
  cards: [
    { image: heroCardOne, alt: "Taru Bali herbal oil bottle displayed on a pedestal" },
    { image: heroCardTwo, alt: "Woman with luminous skin sitting behind the Taru Bali herbal oil bottle" },
    { image: heroCardThree, alt: "Taru Bali natural skincare set with soap and herbal oil displayed on wood" },
    { image: heroCardFour, alt: "Balinese woman holding Taru Bali herbal body oil" },
    { image: heroCardFive, alt: "Taru Bali herbal soap close-up" },
    { image: heroCardSix, alt: "Balinese woman holding premium organic wellness oil" },
  ],
};

// Provides the editorial content for the brand introduction block.
export const aboutData = {
  id: "about",
  title: "A ritual rooted in nature.",
  body: [
    "Inspired by Bali's botanical heritage and artisanal traditions, Taru Bali is a cosmetic body care brand focused on thoughtful formulation as our products are developed with plant-based ingredients, including coconut oil and a carefully selected blend of botanical extracts, and are produced in Bali in accordance with established cosmetic manufacturing standards.",
  ],
  ingredients: [
    { name: "Turmeric", note: "(traditionally valued botanical ingredient)" },
    { name: "Red Ginger", note: "(aromatic botanical extract)" },
  ],
  ctaPrimary: { label: "See Products", href: "#products" },
  ctaSecondary: { label: "Ingredients Benefits", href: "#ingredients" },
  illustrations: [
    { image: turmericIllustration, alt: "Turmeric illustration", className: "bottom-16 right-4" },
    { image: redGingerIllustration, alt: "Red ginger illustration", className: "bottom-20 right-4" },
  ],
};

// Feeds the dark ingredients story section and its floating portrait cards.
export const ingredientStoryData = {
  id: "ingredients",
  overline: "Natural Ingredients",
  title: "SELECTED PLANTS & HERBS ZERO CHEMICALS & NO ADDITIVES MADE IN BALI",
  description:
    "A return to the island's roots, rituals, and natural balance. Taru Bali's body oil is developed with a mindful blend of plant-based ingredients and coconut oil, crafted in line with established cosmetic manufacturing standards.",
  background: storyBackground,
  floatingImages: [
    {
      image: storyFloatOne,
      alt: "Beauty portrait holding Taru Bali oil",
      position: "top-right",
    },
    {
      image: storyFloatTwo,
      alt: "Woman cleansing with Taru Bali soap",
      position: "bottom-left",
    },
  ],
  cta: { label: "Discover Our Products", href: "#products" },
};

// Supplies the alternating product spotlight layouts for both featured products.
export const productSections = [
  {
    id: "oil",
    kicker: "The",
    title: "HERBAL BODY OIL",
    pills: ["BODY MASSAGE & CARE", "SKIN CONDITIONING", "ARTHRITIS & MUSCLE PAINS"],
    icon: iconExtracts,
    description: [
      "Our Herbal Body Oil is a cosmetic body care product formulated with a blend of plant-based ingredients. Designed for daily body care and massage, the oil supports a smooth, supple, and comfortably conditioned skin feel.",
      "Use it as part of a daily body care routine or wellness massage ritual. The premium bottle design, warm gold detailing, and rich botanical tone mirror the same luxury seen on the original Taru Bali experience.",
    ],
    image: oilMainImage,
    alt: "Taru Bali herbal body oil on a wood pedestal",
    thumbs: [
      { image: oilThumbOne, alt: "Taru Bali oil framed by tropical leaves" },
      { image: oilThumbTwo, alt: "Balinese woman holding Taru Bali herbal oil" },
      { image: oilThumbThree, alt: "Beauty portrait with Taru Bali herbal oil" },
    ],
    ctaPrimary: { label: "Partnership", href: "#story" },
    ctaSecondary: { label: "Shop Product", href: "https://shop.tarubali.com/" },
    reverse: false,
  },
  {
    id: "soap",
    kicker: "The",
    title: "HERBAL SOAP",
    pills: ["DAILY CLEANSING", "GENTLE EXFOLIATION", "SOFTENS SKIN"],
    icon: iconPure,
    description: [
      "Formulated with botanical extracts from our oil production and coconut oil, this herbal soap is produced using a traditional soap-making method. The formulation blends plant-based ingredients with natural oils to create a gentle cleansing bar suitable for daily use.",
      "Each bar is cured for 4-6 weeks, allowing the soap to develop a firm texture and long-lasting performance. The result is a mild, skin-friendly soap designed for everyday cleansing, leaving the skin feeling clean, soft, and comfortably conditioned.",
    ],
    image: soapMainImage,
    alt: "Taru Bali herbal soap flat lay with spices and botanicals",
    thumbs: [
      { image: soapThumbOne, alt: "Soap and oil displayed together" },
      { image: soapThumbTwo, alt: "Model holding Taru Bali herbal soap" },
      { image: soapThumbThree, alt: "Close-up of Taru Bali herbal soap bar" },
    ],
    ctaPrimary: { label: "Partnership", href: "#story" },
    ctaSecondary: {
      label: "Shop Product",
      href: "https://shop.tarubali.com/products/taru-bali-herbal-soap",
    },
    reverse: true,
  },
];

// Lists the supporting brand principles shown beneath the product story.
export const principlesData = {
  id: "principles",
  title: "OUR BOTANICAL OIL CARRIES FIVE KEY PRINCIPLES",
  videoThumb: oilThumbOne,
  items: [
    {
      title: "HERBAL EXTRACTS",
      description: "A mindful blend of traditional botanicals and coconut oil, selected with heritage in mind.",
      icon: iconExtracts,
    },
    {
      title: "MULTI-PURPOSE USE",
      description: "Suitable for daily body massage, aroma care, and cosmetic body rituals.",
      icon: iconMultipurpose,
    },
    {
      title: "CLEAN FORMULA",
      description: "Crafted without added colorants or mineral oils for a simple, gentle formulation.",
      icon: iconPure,
    },
    {
      title: "MOISTURIZING CARE",
      description: "Leaves the skin soft and smooth while keeping a plant-based botanical balance.",
      icon: iconMoisturizing,
    },
    {
      title: "BALINESE HERITAGE",
      description: "Inspired by island rituals, craftsmanship, and the story behind Taru Bali.",
      icon: iconHeritage,
    },
  ],
};

// Drives the reseller opportunity section and its calls to action.
export const partnershipData = {
  id: "story",
  overline: "Reseller Opportunity",
  title: "Bring Taru Bali to Your Region",
  description:
    "Taru Bali is expanding internationally, and we invite partners to introduce our cosmetic body care products to new markets. Our products are trusted by customers who value quality ingredients, consistent formulation, and responsible production.",
  image: partnershipImage,
  primaryCta: { label: "Become a Partner", href: "#footer" },
  secondaryCta: { label: "See Details", href: "#footer" },
};

// Stores FAQ tabs and accordion content for the final support section.
export const faqData = {
  id: "faqs",
  tabs: [
    {
      label: "Products",
      items: [
        {
          question: "What makes Taru Bali products feel premium?",
          answer:
            "The brand combines refined packaging, botanical formulations, Balinese visual heritage, and carefully paced storytelling to create a luxury body care experience from the first interaction to the final application.",
        },
        {
          question: "How do I use the Herbal Body Oil?",
          answer:
            "Apply the oil as part of a full-body massage or daily body care ritual. Massage it into the skin using slow circular movements and allow it to absorb comfortably.",
        },
        {
          question: "Can the Herbal Soap be used daily?",
          answer:
            "Yes. The soap is positioned as a gentle daily cleansing bar, formulated with botanical extracts and cured for several weeks to create a skin-friendly finish.",
        },
      ],
    },
    {
      label: "Partnership",
      items: [
        {
          question: "Is Taru Bali open to international distribution?",
          answer:
            "Yes. Taru Bali actively presents itself as a brand seeking partners in selected regions, with a strong focus on quality ingredients, responsible production, and premium positioning.",
        },
        {
          question: "What kind of partner is the brand looking for?",
          answer:
            "The site speaks to distributors and resellers who can carry the brand's luxury presentation into new regions while preserving the same premium standards and storytelling.",
        },
        {
          question: "How can I start a conversation?",
          answer:
            "Use the partnership and contact pathways in the footer or open menu to start the conversation around availability, distribution, and regional growth.",
        },
      ],
    },
  ],
};

// Centralizes footer links, badges, and closing calls to action.
export const footerData = {
  id: "footer",
  ctaTitle: "We create the opportunity. You turn it into success",
  ctaPrimary: { label: "Be our Partner", href: "#story" },
  ctaSecondary: { label: "Contact Us", href: "#footer" },
  links: {
    index: [
      { label: "The Products", href: "#products" },
      { label: "The Ingredients", href: "#ingredients" },
      { label: "How to Use", href: "#oil" },
      { label: "The Partnership", href: "#story" },
      { label: "The Blog", href: "#faqs" },
      { label: "Quality Assurance", href: "#footer" },
      { label: "Privacy Policy", href: "#footer" },
      { label: "Terms & Conditions", href: "#footer" },
      { label: "Cookie Preferences", href: "#footer" },
    ],
    social: [{ label: "Instagram", href: "https://www.instagram.com/tarubaliofficial/" }],
  },
  certifications: [certificationOne, certificationTwo],
  halalBadge,
  borderProper,
};
