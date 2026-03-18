import { SliderInterface } from "../entity/SliderEntity";


export const SliderData: SliderInterface[] = [
  {
    id: 1,
    title: <>Business Consulting Services <br /> for Expert Transformation</>,
    description: `Transform your business and boost operational efficiency with our expert 
    consulting solutions, which include fixed assets verification, fixed assets labels, and 
    fixed assets tags.`,
    image: "/assets/img/slider/09.jpg",
    href: "/contact",
    btnTitle: 'Get Free Consultation',
  },
  {
    id: 2,
    title: <>Our Story, and All About Us</>,
    description: "Kegan Management Consulting (formerly The Asset Label Company) stands as a leading authority in marking, identification, and traceability solutions.",
    image: "/assets/img/slider/10.jpg",
    href: "/about",
    btnTitle: 'View More',
  },
];


export const ServiceSliderData: SliderInterface[] = [
  {
    id: 1,
    title: <>Software</>,
    description: `From seamless inventory control to advanced site security, 
      we provide the tools you need to protect and scale. Our expertise spans 
      EAS hardware, Guard Solutions, and bespoke software engineering.`,
    image: "/assets/img/slider/06_software.jpg",
    href: "#",
    btnTitle: 'View More',
    css: 'bg-linear-to-br from-slate-800 to-slate-950'
  },
  {
    id: 2,
    title: <>Fixed Assets Solutions</>,
    description: `Maximize asset visibility with our end-to-end management ecosystem. 
      We offer precision tagging solutions, comprehensive FA systems, and specialized 
      value-added services that go far beyond basic tracking.`,
    image: "/assets/img/slider/04_fixed.jpg",
    href: "#",
    btnTitle: 'View More',
    css: 'bg-linear-to-br from-slate-700 to-slate-950'
  },
  {
    id: 3,
    title: <>General Consulting</>,
    description: `Driving financial growth through precision and compliance. Our firm 
      delivers expert Audit & Assurance, Strategic Tax Planning, and Full-Cycle Accounting 
      and Bookkeeping services.`,
    image: "/assets/img/slider/05_general.jpg",
    href: "#",
    btnTitle: 'View More',
    css: 'bg-linear-to-br from-slate-700 to-slate-950'
  },
]

