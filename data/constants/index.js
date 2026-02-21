import hero from "@/public/assets/hero.webp";
import kitchenImage from "@/public/assets/kitchen.webp";
import bathroomImage from "@/public/assets/bathroom.webp";
import livingRoomImage from "@/public/assets/living-room.webp";

import portfolio1 from "@/public/assets/portfolio1.webp";
import portfolio2 from "@/public/assets/portfolio2.webp";
import portfolio3 from "@/public/assets/portfolio3.webp";
import portfolio4 from "@/public/assets/portfolio4.webp";
import portfolio5 from "@/public/assets/portfolio5.webp";
import portfolio6 from "@/public/assets/portfolio6.webp";

import user1 from "@/public/assets/user1.webp";
import user2 from "@/public/assets/user2.webp";
import user3 from "@/public/assets/user3.webp";
import user4 from "@/public/assets/user4.webp";
import user5 from "@/public/assets/user5.webp";
import user6 from "@/public/assets/user6.webp";

export const LINKS = [
  {
    name: "Originals",
    link: "#originals",
  },
  {
    name: "Canvas",
    link: "#canvas",
  },
  {
    name: "Trending",
    link: "#trending",
  },
  {
    name: "Community",
    link: "#community",
  },
  {
    name: "Publish",
    link: "#publish",
  },
];

export const HERO_CONTENT = {
  title: "Toonima",
  subtitle: "art that scrolls",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Toonima Originals",
    description:
      "Dive into our premium vertical comics, exclusive to Toonima. Experience cinematic storytelling crafted by industry leaders, optimized specifically for your seamless mobile scrolling experience.",
    image: kitchenImage,
    alt: "Toonima Originals",
  },
  {
    title: "Canvas Creator Hub",
    description:
      "The home of indie storytelling. We provide the stage and the audience for independent artists to self-publish their works, grow a loyal fanbase, and revolutionize the digital comic world.",
    image: bathroomImage,
    alt: "Canvas Creator Hub",
  },
  {
    title: "Global Community",
    description:
      "Connect with millions of fellow fans. Engage in real-time discussions, support your favorite indie creators through our tipping system, and discover art that transcends borders and languages.",
    image: livingRoomImage,
    alt: "Global Community",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Apex Predator: Formula Zero",
    description:
      "A high-stakes racing saga following a ruthless prodigy who dominates the grid through sheer focus and a refusal to lift off the throttle.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "The Blue Streak",
    description:
      "An underdog story of a driver who finds a legendary 'ghost' engine, pushing the boundaries of physics on the world's most dangerous street circuits.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Redline Rebellion",
    description:
      "In a future where racing is outlawed, a group of rebel engineers builds the ultimate machine to challenge the corporate-controlled speed limit.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Pit Wall Strategy",
    description:
      "A technical drama focusing on the genius tacticians and engineers who win races from the garage, where every millisecond counts.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Monaco Mirage",
    description:
      "A glamorous heist mystery set against the backdrop of the world's most prestigious Grand Prix, where the lines between racing and reality blur.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Full Send: 33 Degrees",
    description:
      "A shonen-style action series following the rise of a young driver, capturing the mental grit required to stay at the top of the podium.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear from the creators and readers who make Toonima the fastest-growing digital comic destination. We are committed to fueling the next generation of storytelling.",
  reviews: [
    {
      name: "Marcus Vane",
      title: "Canvas Creator",
      review:
        "Toonima gave me the platform to share my story with the world. The creator tools are intuitive, and seeing the community engage with my art in real-time is an incredible experience!",
      image: user1,
    },
    {
      name: "Sarah Jenkins",
      title: "Premium Reader",
      review:
        "The vertical reading experience is so much better than traditional apps. It feels like the art is actually moving as I scroll. I haven't put my phone down since I discovered Neon Circuit!",
      image: user2,
    },
    {
      name: "Kenji Sato",
      title: "Art Director",
      review:
        "Toonima is bridging the gap between indie passion and professional production. Their support for artists and dedication to high-quality vertical storytelling is unparalleled.",
      image: user3,
    },
    {
      name: "Elena Petrov",
      title: "Casual Reader",
      review:
        "I love the diversity of genres! Whether I want an epic fantasy or a quick laugh, there's always something fresh on the home feed. The app is incredibly smooth and easy to use.",
      image: user4,
    },
    {
      name: "David Aris",
      title: "Indie Illustrator",
      review:
        "Publishing on Canvas was the best decision I ever made. The analytics helped me understand my readers, and the monetization options actually allow me to earn from my passion.",
      image: user5,
    },
    {
      name: "Linda Wu",
      title: "Fan Club Founder",
      review:
        "The community features are top-notch. Chatting about the latest episode in the comments section makes reading feel like a shared event. Toonima really understands fan culture.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have a story idea or need technical support? Reach out to our team, and we'll help you find your place in the Toonima universe.",
  phone: {
    label: "Support",
    value: "+1 (800) TOONIMA",
  },
  email: {
    label: "Email",
    value: "creators@toonima.com",
  },
  address: {
    label: "Headquarters",
    value: "789 Ink Street, Suite 33, Creative District, ST 99101",
  },
};