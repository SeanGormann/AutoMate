import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, cbot, processautomation, leadgeneration, number1, number2, number3, number4} from "../assets";
import { projectDescriptions } from "./projectdesc";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "pipeline",
    title: "Pipeline",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Seamless Integration",
    content:
      "We'll implement our solution into your existing workflow with minimal disruption.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and data are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Money Back Guarantee",
    content:
      "If our services haven't significantl improved your operations, we'll refund you fully.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];



export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


export const projects = [
  {
    name: "Expert Chatbot Integration",
    description: projectDescriptions.project1.description,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cbot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automated Lead Generation",
    description: projectDescriptions.project2.description,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leadgeneration,
    source_code_link: "https://github.com/",
  },
  {
    name: "Process Automation",
    description: projectDescriptions.project3.description,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: processautomation,
    source_code_link: "https://github.com/",
  },
];


export const experiences = [
  {
    title: "Initial Call",
    company_name: "The Journey Begins",
    icon: number1,
    iconBg: "#383E56",
    date: "Day 1",
    points: [
      "We'll have a 30 minute call to discuss your business and your goals.",
      "We'll also discuss your current workflow and how we can improve it.",
      "Discuss what pricing options are available and best suited for you.",
    ],
  },
  {
    title: "Offer Finalization",
    company_name: "Ironing the Details",
    icon: number2,
    iconBg: "#E6DEDD",
    date: "Day 3",
    points: [
      "We'll send you a proposal with a detailed breakdown of our services, as discussed in the initial call.",
      "Payment plans will be discussed and finalized.",
      "Another call will be scheduled to discuss the proposal and finalize the deal.",
      "Work will begin once the deal is finalized.",
    ],
  },
  {
    title: "Order fulfillment",
    company_name: "The Fun Part",
    icon: number3,
    iconBg: "#383E56",
    date: "Day 7-14",
    points: [
      "Depending on the scope of the project, we'll fulfill the order within 7-14 days.",
      "Upon completeion and successful integration, a 1hr training call will be scheduled to learn how to best utilize the AI tools.",
      "We'll also provide you with a detailed report of the work done, and how it will benefit your business."
    ],
  },
  {
    title: "Maintenance & Beyond",
    company_name: "To Infinity ...",
    icon: number4,
    iconBg: "#E6DEDD",
    date: "Day 15+",
    points: [
      "Depending on the chosen plan, we'll provide you with ongoing support and maintenance for a prolonged duration.",
      "Subsequent maintenance and support will be charged at a discounted rate.",
      "By day 90, we'll schedule a call to discuss the results of the project, and how we can further improve your business."
    ],
  },
];