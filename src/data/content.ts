export const SKOOL_COMMUNITY_URL = "https://www.skool.com/the-business-of-audio-2845";

export const OWNER_PORTRAIT_URL = "https://assets.skool.com/f/81649c31d95049d589c3d6d74ec343bd/0cadf554b8794961b08f02ad50fb4429eff6fa5e2cd845d3b6dda4751d71b1c3.jpg";

export const HERO_IMAGE_URL = "/assets/aistudio/Smiling_Educator_with_Books_and_Pencils_971c8c34.png";
export const HERO_IMAGE_FALLBACK = "https://img.sanishtech.com/u/bff24e50688ab643f347c8ffdc740a73.png";

export const READING_IMAGE_URL = "/assets/aistudio/Smiling_Girl_Reading_in_a_Colorful_Library_44a3f6f6.png";
export const READING_IMAGE_FALLBACK = "https://img.sanishtech.com/u/d31cf6a777283048802dfecef5e0ee2a.png";

export const MATH_IMAGE_URL = "/assets/aistudio/Smiling_Student_s_Math_Learning_Moment_4be43202.png";
export const MATH_IMAGE_FALLBACK = "https://img.sanishtech.com/u/b3b04254bc36a17fbf33b205e5987363.png";

export const IMAGES = {
  hero: HERO_IMAGE_URL,
  readingBooks: READING_IMAGE_URL,
  mathBlocks: MATH_IMAGE_URL,
  happyStudent: "/src/assets/images/happy_student_books_1794332119023.jpg",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Programs", href: "#programs" },
  { label: "About Mrs. Stephens", href: "#about" },
  { label: "Our Community", href: "#community" },
  { label: "FAQs", href: "#faqs" },
];

export const TRUST_POINTS = [
  {
    title: "20+ Years",
    subtitle: "of Experience",
  },
  {
    title: "Personalized",
    subtitle: "Attention",
  },
  {
    title: "Reading &",
    subtitle: "Mathematics",
  },
  {
    title: "Family",
    subtitle: "Support",
  },
];

export const PROGRAMS = [
  {
    id: "reading",
    tag: "WEEKLY LEARNING SESSION",
    title: "Reading Development",
    description:
      "Help your child build reading skills, gain confidence, and develop a love for learning.",
    schedule: "Every Tuesday • 1 Hour Weekly",
    image: READING_IMAGE_URL,
    fallbackImage: READING_IMAGE_FALLBACK,
    accentColor: "#168C89",
    tagColor: "bg-[#168C89] text-white",
    btnColor: "bg-[#168C89] hover:bg-[#127471] text-white",
  },
  {
    id: "math",
    tag: "WEEKLY LEARNING SESSION",
    title: "Mathematics Support",
    description:
      "Give your child helpful guidance in mathematics and build confidence.",
    schedule: "Every Thursday • 1 Hour Weekly",
    image: MATH_IMAGE_URL,
    fallbackImage: MATH_IMAGE_FALLBACK,
    accentColor: "#D99A36",
    tagColor: "bg-[#D99A36] text-white",
    btnColor: "bg-[#D99A36] hover:bg-[#c2872a] text-white",
  },
];

export const FAQS_LEFT = [
  {
    id: 1,
    question: "What does Mrs. Stephens Online Tutoring help with?",
    answer:
      "The tutoring program focuses on supporting children with Reading and Mathematics while helping strengthen academic confidence.",
  },
  {
    id: 2,
    question: "When are the tutoring sessions?",
    answer:
      "Reading takes place every Tuesday for one hour, while Mathematics takes place every Thursday for one hour.",
  },
  {
    id: 3,
    question: "How much experience does Mrs. Stephens have?",
    answer:
      "Mrs. Stephens brings more than 20 years of educational experience and a passion for supporting children and families.",
  },
];

export const FAQS_RIGHT = [
  {
    id: 4,
    question: "Does the community support parents too?",
    answer:
      "Yes. The mission includes supporting both students and parents through educational knowledge, resources, and community support.",
  },
  {
    id: 5,
    question: "How can I become part of the community?",
    answer:
      "Click any Join Our Community button to visit Mrs. Stephens Online Tutoring on Skool and follow the joining process.",
  },
  {
    id: 6,
    question: "Is personalized tutoring available?",
    answer:
      "The business describes its approach as personalized tutoring with one-on-one attention. Visit the Skool community to learn more about available arrangements.",
  },
];
