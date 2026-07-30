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
    slug: "biblio-drop",
    title: "BiblioDrop",
    description: "This is my first industry level project, where I handled both backend and frontend. This project is about reading books, making it a perfect fit for avid readers. In this app, there are several roles (Admin, Librarian, Reader) with distinct features, interactive dashboards, and live tracking.",
    tags: ["Next.js", "Express.js", "MongoDB", "Better Auth", "Stripe", "Recharts", "Node.js", "Hero UI"],
    features: [
      "Role-Based Dashboards: Custom dashboards with visual data representations using Recharts for Admin (total revenue, operations), Librarian (book revenues, deliveries), and Reader (spending, completed books).",
      "Librarian & Admin Approvals: Admins approve/promote users and publish/unpublish books, while approved Librarians can easily add, update, or delete books.",
      "Delivery & Inventory Management: Librarians update book dispatching/delivery statuses, and Readers receive real-time delivery tracking.",
      "Advanced Search & Filtering: Browse page featuring backend-driven pagination, filtering, sorting, and search with URL state persistence.",
      "Book Borrowing & Reviews: Secure borrowing system where only users who have borrowed a specific book can submit reviews on its detail page.",
      "Stripe Payment Integration: Implemented secure payment gateways with Stripe for book transactions along with a complete history.",
      "Interactive Front-End Features: Built with Next.js, Better Auth, Hero UI, React Toastify, theme toggles, and customized user profile editing."
    ],
    behindTheScenes: "Building BiblioDrop was an incredible milestone in my journey. Handling role-based authentication and visual analytics for three separate user interfaces (Admin, Librarian, and Reader) pushed my full-stack capabilities to the next level. Designing the database relationships in MongoDB to manage book inventory, live deliveries, and stripe transactions required meticulous planning. Implementing Stripe payments and JWT-based routing while maintaining state with Better Auth was a major highlight. Ultimately, it taught me how to architect a complex, industry-level project from scratch, making sure the user experience is fluid, secure, and fast.",
    liveLink: "https://biblo-drop.vercel.app",
    clientRepo: "https://github.com/sadikur-sadik/BibloDrop",
    serverRepo: "https://github.com/sadikur-sadik/BibloDrop-Backend",
    image: "/bibliodrop.png",
    detailsImage: "/bibliodrop.png"
  },
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
    image: "/ideavault.png",
    detailsImage: "/ideavault.png"
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
    image: "/tiles-gallery.png",
    detailsImage: "/tiles-gallery.png"
  }
];

