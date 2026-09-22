export const site = {
  name: "Atlantis Recovery Centre",
  short: "Atlantis RC",
  phone: "07 5610 2312",
  fax: "07 5609 6015",
  email: "admin@atlantisrc.com.au",
  address: "1/25 Upton St, Bundall QLD 4217",
  booking:
    "https://book.nookal.com/bookings/book/6B16df79-cDeF-498E-1D0e-9aBFEA23Cf95/practitioner",
};

export const funding = ["Medicare", "NDIS", "DVA", "Workcover", "Private Health", "Fee for Service"];

export const services = [
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    blurb: "Hands-on treatment layered with hydrotherapy and advanced technology.",
    image: "/images/aquatread-control-panel.jpg",
  },
  {
    slug: "psychology",
    title: "Psychology",
    blurb: "A hybrid model that moves through problems, not just talks about them.",
    image: "/images/helping-hand-silhouette.jpg",
  },
  {
    slug: "exercise-physiology",
    title: "Exercise Physiology",
    blurb: "Restore strength, vitality and mood with evidence-based movement.",
    image: "/images/reaxing-treadmill-closeup.jpg",
  },
  {
    slug: "hydrotherapy",
    title: "Hydrotherapy",
    blurb: "Australia's only Aquatread underwater treadmill, on site in Bundall.",
    image: "/images/infrared-sauna.jpg",
  },
];

export const conditions = [
  { slug: "mental-health", title: "Mental Health" },
  { slug: "chronic-pain-and-disorders", title: "Chronic Pain & Disorders" },
  { slug: "physical-rehabilitation", title: "Physical Rehabilitation" },
  { slug: "neurological-and-cognitive", title: "Neurological & Cognitive" },
  { slug: "lifestyle-conditions", title: "Lifestyle Conditions" },
  { slug: "adhd-program", title: "ADHD Program" },
];

export const pillRows = [
  ["Chronic Pain", "Back Pain", "Post-surgical Recovery", "Sports Injuries", "Joint Replacement", "Anxiety", "Depression", "ADHD", "PTSD"],
  ["Stroke Recovery", "Traumatic Brain Injury", "Autism Spectrum", "Obesity", "Cardiovascular", "Diabetes", "Chronic Fatigue", "Hypertension", "OCD", "Phobias"],
  ["Hydrotherapy", "Infrared Sauna", "REAXING Light Wall", "REAX Run Treadmill", "Cognitive-Motor Training", "Activity-Based Psychotherapy", "Body Composition Scans"],
];

export const technology = [
  { slug: "aquatred", title: "Aquatread" },
  { slug: "reaxing-light-wall", title: "REAXING Light Wall" },
  { slug: "reaxing-treadmill", title: "REAXING Treadmill" },
];

// Bios and headshots from atlantisrc.com.au/team. The headshots are Atlantis's circular profile photos,
// cropped to the largest 4:5 portrait inside the circle so they fill the cards.
export const team = [
  {
    name: "Bart Traynor",
    role: "Director | Clinical Psychologist | AHPRA Board-Approved Clinical Supervisor",
    image: "/images/team/bart-traynor.webp",
    bio: [
      "Bart is a passionate, straight-talking Clinical Psychologist who believes mental health support should help people function better in everyday life, not just feel better in the therapy room. He works with clients facing complex challenges, career and performance pressures, and major life transitions, while also supporting clinicians through supervision and professional development.",
      "As Director of Atlantis Recovery Centre, Bart leads an integrated approach that brings together psychology, movement, physical rehabilitation, and performance. His warm, practical style helps people build resilience, improve both mental and physical fitness, and create meaningful, lasting change.",
    ],
  },
  {
    name: "Jade Evans",
    role: "Co-Owner and Head of Business Operations",
    image: "/images/team/jade-evans.webp",
    bio: [
      "Jade is often the first friendly face you'll see when you walk through our doors, or the first person you'll speak with when you call or email. Having been part of Atlantis since it was founded, Jade knows the business inside and out. She oversees the systems that keep everything running smoothly behind the scenes.",
      "In 2025, Jade became Co-Owner of Atlantis alongside Bart Traynor, helping lead the next evolution of the Centre and supporting its continued growth and development.",
      "Jade is also nearing completion of a double degree in Business and Law, bringing a strong understanding of both the practical and strategic sides of running a growing allied health organisation. Warm, approachable and highly organised, Jade plays a central role in making sure both our clients and our team feel supported from the moment they connect with Atlantis.",
    ],
  },
  {
    name: "Dr Yuri Lima",
    role: "Physiotherapist",
    image: "/images/team/yuri-lima.webp",
    bio: [
      "With a lifelong passion for movement and sports, Yuri's approach combines clinical expertise in orthopaedic and sports rehabilitation and patient-centred care to help clients return to their optimal level of function and performance. He believes in empowering individuals through education and active involvement in their recovery process. He is also committed to advancing the field of physiotherapy by holding a Master in Rehabilitation Sciences and a PhD where he investigated ACL injuries in Athletes.",
    ],
  },
  {
    name: "Sarah Savage",
    role: "Senior Exercise Physiologist",
    image: "/images/team/sarah-savage.webp",
    bio: [
      "'Exercise as Medicine'. Sarah lives and breathes her mantra. Sarah is passionate about helping people move with confidence, build strength, and enjoy a better quality of life. She has a particular interest in supporting older adults and brings warmth, intelligence, and genuine care to every session.",
      "Sarah combines her Exercise Physiology expertise with Pilates, Functional Range Conditioning, and hydrotherapy to create safe, personalised programs that make exercise feel achievable, empowering, and enjoyable.",
    ],
  },
  {
    name: "Jeff Leech",
    role: "Clinical Psychologist",
    image: "/images/team/jeff-leech.webp",
    bio: [
      "Jeff is passionate about helping people overcome life's most complex challenges. Whether you're recovering from trauma, managing anxiety or depression, or striving to perform at your best, Jeff provides personalised, evidence-based care using Schema Therapy, ACT, and Activity-Based Psychotherapy. He is also completing advanced training in Psychedelic-Assisted Therapy, combining proven approaches with emerging treatments to help clients achieve lasting change.",
    ],
  },
  {
    name: "Tom Hissey",
    role: "Senior Physiotherapist",
    image: "/images/team/tom-hissey.webp",
    bio: [
      "Tom is an incredibly welcoming Australian Army veteran with experience in both occupational rehabilitation and musculoskeletal physiotherapy, including overseas work supporting UK military personnel. He specialises in helping people return to full function, from young athletes to older clients, drawing on experience in a high-performance setting in Glasgow working with runners, HYROX athletes, and footballers.",
      "Having gone through back surgery and rehab himself, Tom understands what recovery really takes. He combines clinical expertise with genuine care, helping clients rebuild strength and confidence as part of Atlantis's whole person approach to movement and wellbeing.",
    ],
  },
  {
    name: "Lester Rafanan",
    role: "Physiotherapist",
    image: "/images/team/lester-rafanan.webp",
    bio: [],
  },
  {
    name: "Michael Rehardt",
    role: "Provisional Psychologist",
    image: "/images/team/michael-rehardt.webp",
    bio: [
      "Michael is completing his final externship placement at Atlantis Recovery Centre as part of his Master of Clinical Psychology at Griffith University. He brings a thoughtful, creative and practical approach to his work and is continuing to build his clinical experience across a range of presentations. Outside psychology, Michael is also an Aboriginal artist and former competitive sprinter, bringing creativity, discipline and a unique perspective to the Atlantis team.",
    ],
  },
];

export const faqs = [
  {
    q: "Do I need a doctor's referral?",
    a: "No. You can book an initial consult over the phone, by email or in person for most services. If your plan requires a referral for Medicare, DVA or Workcover purposes, our team will guide you through it.",
  },
  {
    q: "How quickly can I be seen?",
    a: "We aim to offer a phone or face-to-face consult within 7 days of you reaching out. When you're in pain, waiting for care isn't an option.",
  },
  {
    q: "Can I access more than one service at once?",
    a: "Yes. Atlantis RC is built for combined, whole-person care. Many clients see a combination of psychology, physiotherapy, exercise physiology and hydrotherapy as one coordinated plan.",
  },
  {
    q: "How can I pay?",
    a: "Clients can pay privately or use DVA, NDIS, private health funds, Workcover, or GP-referred Mental Health Care Plans and EPC plans.",
  },
  {
    q: "Where are you located?",
    a: "1/25 Upton St, Bundall, on the Gold Coast, in a purpose-built facility with hydrotherapy and infrared sauna on site.",
  },
];
