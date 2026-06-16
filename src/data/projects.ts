export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  behindTheScenes?: string;
  liveLink?: string;
  clientRepo?: string;
  serverRepo?: string;
  image?: string;
  detailsImage?: string;
}

export const projects: Project[] = [
  {
    slug: "idea-vault",
    title: "Idea Vault",
    description: "A secure platform where innovators can post their concepts, explore what others are working on, and collaborate securely. Built with full CRUD functionality and a protected REST API.",
    tags: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Better Auth", "JWT"],
    features: [
      "Complete Idea Management: Creators have total control with the ability to Post new concepts, Patch/Edit them as they evolve, and Delete them via a personalized Idea History tab.",
      "Interactive Community Feedback: Users can Post comments to share feedback, Edit/Patch their thoughts, or Delete their interactions seamlessly.",
      "Featured Ideas Hub: A curated section filtered and delivered directly from the backend using optimized MongoDB query limits.",
      "Personalized Dashboard: A clean 'My Interactions' panel to track engagement history across the platform at a glance.",
      "Robust Security: Implemented secure user authentication and authorization using Better Auth, JWT, and Proxy configurations."
    ],
    behindTheScenes: "The most exciting part was building the protected REST API endpoints. Because data integrity matters, all critical operations—specifically Post, Patch, and Delete actions for both ideas and comments—are strictly guarded by JWT verification. Managing the lifecycle of these secured requests from the Next.js client to the Express server and MongoDB database taught me a lot about building resilient, production-ready applications. Every bug solved along the way made the process worth it, and I'm really proud of how the final application turned out.",
    liveLink: "https://idea-vault-a-9.vercel.app",
    clientRepo: "https://github.com/sadikur-sadik/IdeaVault-A-9",
    serverRepo: "https://github.com/sadikur-sadik/IdeaVault-A-9--Backend",
    image: "/idea_vault_mockup.png",
    detailsImage: "/idea_vault_details.png"
  },
  {
    slug: "tiles-gallery",
    title: "Tiles Gallery",
    description: "A premium, highly interactive showroom and web application showcasing a curated collection of luxury marbles, slate, and stone tiles. Built with modern routing, smooth scroll animations, and dynamic product catalogs.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Better Auth", "JSON Server", "Animate.css"],
    features: [
      "Interactive Tiles Catalog: Users can view, search, and browse a rich selection of premium marble, granite, and slate tiles with detailed textures.",
      "Dynamic Route Structure: Implemented precise routing and nested routes using Next.js router to create a fast, seamless browsing experience.",
      "Stunning Visual Animations: Leveraged CSS transitions, Tailwind, and Animate.css to create eye-catching presentation grids for stone materials.",
      "Secure User Authentication: Configured Better Auth for user sign-in and personalized profiles to manage user preferences and saved item catalogs."
    ],
    behindTheScenes: "The main focus of Tiles Gallery was designing an immersive, high-end catalog browser using Next.js. Building a responsive gallery that does justice to high-resolution luxury marble textures required optimizing layouts, images, and animations. Integrating Better Auth for the user space allowed me to create a protected workspace where visitors can save items of interest. The result is a fast, responsive, and visually striking showroom that highlights the beauty of natural stone.",
    liveLink: "https://tiles-gallery-pi.vercel.app",
    clientRepo: "https://github.com/sadikur-sadik/Tiles-Gallery",
    image: "/tiles_gallery_mockup.png",
    detailsImage: "/tiles_gallery_details.png"
  },
  {
    slug: "keen-keeper",
    title: "Keen Keeper",
    description: "A personal connection manager and CRM designed to track, schedule, and visualize interactions with friends and professional contacts. Keeps you close to the relationships that matter most.",
    tags: ["React.js", "Tailwind CSS", "DaisyUI", "React Router", "Recharts", "React Toastify"],
    features: [
      "Relationship Timeline: Track dates, times, and specific modes of communication (call, message, meeting) with all friends in a chronologically ordered Feed.",
      "Data Visualization Dashboard: Provides interactive charts and graphs via Recharts, illustrating communication frequency and health metrics at a glance.",
      "Smart Attention Alerts: Highlights connections that need immediate attention or have been neglected, helping you maintain important relationships.",
      "Interactive CRUD Management: Easily add new friends, log interactions, delete records, and update status dynamically on a clean, responsive layout."
    ],
    behindTheScenes: "Building Keen Keeper was an exciting exercise in managing complex frontend state and displaying it visually. Since relationship health is dynamic, creating real-time visual charts using Recharts was highly rewarding. Designing the timeline logic to calculate and flag friends that need attention based on contact history challenged my data processing skills. Deployed on Vercel, Keen Keeper serves as a responsive, daily-use dashboard that helps keep valuable human connections alive.",
    liveLink: "https://keen-keeper-mauve.vercel.app",
    clientRepo: "https://github.com/sadikur-sadik/KeenKeeper",
    image: "/keen_keeper_mockup.png",
    detailsImage: "/keen_keeper_details.png"
  }
];

