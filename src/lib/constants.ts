export interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  price: string;
  duration: string;
  tag: string;
  tagColor: string;
  feature: string;
  featureIcon: string;
  jobSupport: boolean;
  highlighted?: boolean;
  originalPrice?: string;
}

export const courses: Course[] = [
  {
    id: "makeup-artistry",
    title: "Makeup Artistry",
    category: "Makeup",
    level: "Beginner",
    price: "ETB 4,500",
    duration: "6 Weeks",
    tag: "Makeup",
    tagColor: "bg-primary text-background",
    feature: "Certified",
    featureIcon: "verified",
    jobSupport: true,
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    category: "Hair",
    level: "Advanced",
    price: "ETB 4,200",
    duration: "8 Weeks",
    tag: "Hair",
    tagColor: "bg-primary text-background",
    feature: "Job Placement",
    featureIcon: "work",
    jobSupport: true,
  },
  {
    id: "nail-technology",
    title: "Nail Technology",
    category: "Nails",
    level: "Beginner",
    price: "ETB 3,500",
    duration: "4 Weeks",
    tag: "Nails",
    tagColor: "bg-tertiary-container text-on-tertiary-container",
    feature: "Full Kit Incl.",
    featureIcon: "brush",
    jobSupport: false,
  },
  {
    id: "lash-extensions",
    title: "Lash Extensions",
    category: "Lashes",
    level: "Intermediate",
    price: "ETB 2,800",
    duration: "3 Weeks",
    tag: "Lashes",
    tagColor: "bg-secondary-container text-on-secondary-container",
    feature: "Pro Tools",
    featureIcon: "visibility",
    jobSupport: false,
  },
  {
    id: "fashion-design",
    title: "Fashion Design",
    category: "Fashion",
    level: "Advanced",
    price: "ETB 7,000",
    duration: "12 Weeks",
    tag: "Fashion",
    tagColor: "bg-primary text-background",
    feature: "Portfolio",
    featureIcon: "star",
    jobSupport: true,
  },
  {
    id: "beauty-pro-bundle",
    title: "Beauty Pro Bundle",
    category: "Bundle",
    level: "Comprehensive",
    price: "ETB 18,000",
    duration: "6 Months",
    tag: "Hot Deal",
    tagColor: "bg-secondary text-on-secondary",
    feature: "Master Diploma",
    featureIcon: "workspace_premium",
    jobSupport: true,
    highlighted: true,
    originalPrice: "ETB 22,000",
  },
];

export const categories = ["All", "Makeup", "Hair", "Nails", "Lashes", "Fashion"];

export const featuredCourses = [
  {
    title: "Advanced Makeup Artistry",
    price: "$850",
    duration: "12 Weeks",
    seats: "10 Seats Left",
    badge: "New",
    badgeColor: "bg-secondary-container text-on-secondary-fixed",
  },
  {
    title: "Pro Hair Styling Masterclass",
    price: "$1,200",
    duration: "16 Weeks",
    seats: "5 Seats Left",
    badge: "Bestseller",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    title: "Nail Tech & Creative Art",
    price: "$600",
    duration: "8 Weeks",
    seats: "12 Seats Left",
    badge: "Popular",
    badgeColor: "bg-primary-container text-on-primary-container",
  },
];

export interface Instructor {
  name: string;
  specialty: string;
  specialtyColor: string;
  bio: string;
  imageIndex: number;
  socialIcons: { icon: string; color: string }[];
}

export const instructors: Instructor[] = [
  {
    name: "Sara A.",
    specialty: "Makeup",
    specialtyColor: "bg-primary-container text-on-primary-container",
    bio: "10+ years experience in bridal and editorial makeup. Certified by global beauty standards.",
    imageIndex: 7,
    socialIcons: [
      { icon: "language", color: "text-primary" },
      { icon: "photo_camera", color: "text-primary" },
    ],
  },
  {
    name: "Mimi T.",
    specialty: "Hair",
    specialtyColor: "bg-secondary-container text-on-secondary-container",
    bio: "Specializing in contemporary braiding and structural hair design for modern artists.",
    imageIndex: 8,
    socialIcons: [
      { icon: "history_edu", color: "text-secondary" },
      { icon: "auto_awesome", color: "text-secondary" },
    ],
  },
  {
    name: "Helen B.",
    specialty: "Nail/Lash",
    specialtyColor: "bg-tertiary-container text-on-tertiary-container",
    bio: "Pioneer in advanced lash extension techniques and architectural nail artistry.",
    imageIndex: 9,
    socialIcons: [
      { icon: "brush", color: "text-tertiary" },
      { icon: "visibility", color: "text-tertiary" },
    ],
  },
  {
    name: "Feven G.",
    specialty: "Fashion",
    specialtyColor: "bg-primary-container text-on-primary-container",
    bio: "Award-winning fashion designer focused on integrating traditional motifs with modern silhouettes.",
    imageIndex: 10,
    socialIcons: [
      { icon: "architecture", color: "text-primary" },
      { icon: "checkroom", color: "text-primary" },
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageIndex: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Freelance MUA",
    quote:
      "The curriculum is intense but rewarding. I landed my first bridal gig before I even graduated. The mentorship is truly world-class.",
    imageIndex: 11,
  },
  {
    name: "David Chen",
    role: "Salon Owner",
    quote:
      "Changing careers was scary, but BEIMNET made it seamless. The hands-on sessions gave me the confidence to open my own boutique salon.",
    imageIndex: 12,
  },
  {
    name: "Aaliyah Muse",
    role: "Editorial Stylist",
    quote:
      "The editorial module was a game changer. I've since worked on three fashion week shows. This academy opens real doors.",
    imageIndex: 13,
  },
];

export const whyChooseUs = [
  {
    title: "Expert Faculty",
    description: "Learn from masters who work with top celebs and fashion brands.",
    icon: "school",
    iconBg: "bg-primary/10",
    iconHoverBg: "group-hover:bg-primary",
  },
  {
    title: "Modern Kits",
    description: "Each student receives a professional grade toolkit on day one.",
    icon: "construction",
    iconBg: "bg-secondary/10",
    iconHoverBg: "group-hover:bg-secondary",
  },
  {
    title: "Industry Links",
    description: "Exclusive job placements at top salons and film studios.",
    icon: "bolt",
    iconBg: "bg-tertiary-container/10",
    iconHoverBg: "group-hover:bg-tertiary-container",
  },
  {
    title: "Flexible Study",
    description: "Weekend and evening batches for working professionals.",
    icon: "calendar_month",
    iconBg: "bg-outline-variant/10",
    iconHoverBg: "group-hover:bg-on-surface",
  },
];

export interface GalleryItem {
  title: string;
  subtitle: string;
  imageIndex: number;
  badge?: string;
  badgeColor?: string;
}

export const galleryItems: GalleryItem[] = [
  { title: "Editorial Edge", subtitle: "Student: Elena V.", imageIndex: 26, badge: "New", badgeColor: "text-secondary bg-secondary/10" },
  { title: "Precision Styling", subtitle: "Student: Marcus J.", imageIndex: 27 },
  { title: "Color Fusion", subtitle: "Student: Sarah L.", imageIndex: 28 },
  { title: "High-Fashion Runway", subtitle: "Student: Team Project", imageIndex: 29 },
  { title: "The Toolkit", subtitle: "Session: Fundamentals", imageIndex: 30 },
  { title: "Futuristic Glow", subtitle: "Student: David K.", imageIndex: 31 },
  { title: "Bridal Elegance", subtitle: "Student: Maya R.", imageIndex: 32 },
  { title: "Gold Leaf Fusion", subtitle: "Student: Chloe T.", imageIndex: 33 },
  { title: "UV Creative", subtitle: "Student: Leo G.", imageIndex: 34 },
];
