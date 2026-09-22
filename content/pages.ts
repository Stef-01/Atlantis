// Page content taken from atlantisrc.com.au (copy reproduced as published there).
export type Block =
  | { type: "split"; eyebrow?: string; heading: string; body: string[]; image?: string; cta?: { label: string; href: string } }
  | { type: "features"; eyebrow?: string; heading: string; intro?: string; items: { title: string; body: string; image?: string }[] }
  | { type: "details"; eyebrow?: string; heading: string; intro?: string; items: { title: string; body?: string }[]; image?: string }
  | { type: "list"; eyebrow?: string; heading: string; intro?: string; items: string[]; image?: string }
  | { type: "cards"; eyebrow?: string; heading: string; intro?: string; items: { title: string; body: string; href: string; image: string }[] }
  | { type: "photo"; image: string; caption?: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "video"; eyebrow?: string; heading: string; body?: string; videos: { id: string; title: string }[] };

export type SubPage = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  sub: string;
  image: string;
  chips: string[];
  blocks: Block[];
  metaTitle?: string;
};

const commitmentCopy =
  "We understand that when you are in pain, waiting for care is simply not an option. That's why Atlantis Recovery Centre is committed to servicing new clients quickly. We have low wait times and are dedicated to getting you started on your recovery journey as soon as possible. Our goal is to provide you with timely, effective, and compassionate care from the moment you first reach out to us.";

const commitment: Block = {
  type: "split",
  eyebrow: "Our commitment to you",
  heading: "When you are in pain, waiting for care is simply not an option.",
  body: [commitmentCopy, "Leave your details for a phone or face to face consult within 7 days from Atlantis RC."],
  image: "/images/reaxing-treadmill.jpg",
  cta: { label: "Get in touch", href: "/contact" },
};

const fundingList: Block = {
  type: "list",
  eyebrow: "Funding & rebates",
  heading: "Pay privately, or use the funding you already have.",
  intro: "Our clients can pay privately or utilise DVA, NDIS, private health funds, Workcover or GP referred Mental Health Care Plans or EPC plans while receiving the highest level of treatment.",
  items: ["Medicare", "NDIS", "DVA", "Workcover", "Private Health", "Fee For Service"],
  image: "/images/treadmill-console.jpg",
};

const whoIsArcFor: Block = {
  type: "features",
  eyebrow: "Who is ARC for?",
  heading: "Unique allied health care featuring.",
  items: [
    { title: "Whole-person care", body: "Comprehensive care that addresses both physical and psychological needs at once.", image: "/images/bart-traynor-selfie.jpg" },
    { title: "Advanced technology", body: "Access to Australia's only Hydro Tread underwater treadmill system, plus the REAXING wall and treadmill.", image: "/images/infrared-sauna.jpg" },
    { title: "Progress tracking", body: "Evidence-based programs backed by precise progress tracking.", image: "/images/aquatread-control-panel.jpg" },
  ],
};

export const serviceCards: Extract<Block, { type: "cards" }> = {
  type: "cards",
  eyebrow: "Services",
  heading: "Choose your service.",
  intro: "Choose your service below or explore to learn more about Atlantis RC.",
  items: [
    { title: "Physiotherapy", body: "Helping you move better, reduce pain and regain confidence in your body.", href: "/physiotherapy", image: "/images/aquatread-control-panel.jpg" },
    { title: "Psychology", body: "We don't just talk about problems, we move through them.", href: "/psychology", image: "/images/helping-hand-silhouette.jpg" },
    { title: "Exercise Physiology", body: "Exercise is a powerful tool for recovery, for physical injuries and mental health.", href: "/exercise-physiology", image: "/images/reaxing-treadmill-closeup.jpg" },
    { title: "Hydrotherapy", body: "The only Aquatread Hydrotherapy treadmill in Australia.", href: "/hydrotherapy", image: "/images/infrared-sauna.jpg" },
  ],
};

export const technologyCards: Extract<Block, { type: "cards" }> = {
  type: "cards",
  eyebrow: "ARC's technology",
  heading: "A complete suite of advanced technologies unparalleled elsewhere in Australia.",
  items: [
    { title: "Aquatread", body: "A state-of-the-art, custom-made underwater treadmill that is truly unique in Australia.", href: "/aquatred", image: "/images/aquatread-session.jpg" },
    { title: "REAXING Light Wall", body: "An exclusive interactive training device that redefines physical and cognitive capabilities.", href: "/reaxing-light-wall", image: "/images/reaxing-light-wall.jpg" },
    { title: "REAXING Treadmill", body: "Sudden and unpredictable inclinations in all directions. Unpredictable training for unmatched results.", href: "/reaxing-treadmill", image: "/images/reaxing-treadmill-closeup.jpg" },
  ],
};

const conditionCards: Block = {
  type: "cards",
  eyebrow: "What we treat",
  heading: "Where would you like support?",
  items: [
    { title: "Mental Health", body: "Anxiety, depression, ADHD, PTSD, phobias and OCD.", href: "/mental-health", image: "/images/bart-traynor-selfie.jpg" },
    { title: "Chronic Pain & Disorders", body: "Moving beyond temporary fixes to long-term relief.", href: "/chronic-pain-and-disorders", image: "/images/arc-dumbbells-closeup.jpg" },
    { title: "Physical Rehabilitation", body: "Return to full function, strength and mobility.", href: "/physical-rehabilitation", image: "/images/aquatread-session.jpg" },
    { title: "Neurological & Cognitive", body: "Rebuilding lost connections and reclaiming independence.", href: "/neurological-and-cognitive", image: "/images/reaxing-light-wall.jpg" },
    { title: "Lifestyle Conditions", body: "A proactive and empowering approach to health.", href: "/lifestyle-conditions", image: "/images/gym-floor-session.jpg" },
    { title: "ADHD Program", body: "The ADHD Blueprint: a 6-week adult 1:1 treatment.", href: "/adhd-program", image: "/images/reaxing-wall-in-use.jpg" },
  ],
};

// YouTube embeds from atlantisrc.com.au
export const videos = {
  hydroTread: { id: "2jRnsFlRjbU", title: "Hydro Tread at Atlantis Recovery Centre" },
  hydroReview: { id: "rhwJWO8rER8", title: "Hydro Tread review" },
  arc: { id: "UP7df84QidE", title: "Inside Atlantis Recovery Centre" },
  reaxing: { id: "cuwJ3ecjHGI", title: "REAXING lighting system: visual challenge" },
};

const arcVideo: Block = {
  type: "video",
  eyebrow: "Inside the centre",
  heading: "The latest in technology.",
  body: "We are proud to carry some of the most advanced treatment technology in Australia.",
  videos: [videos.arc, videos.reaxing],
};

const techList: Block = {
  type: "details",
  eyebrow: "State-of-the-art technology",
  heading: "To ensure you receive the most effective care, we are proud to offer the latest in recovery technology.",
  intro: "Our facility is equipped with:",
  items: [
    { title: "Hydro Tread Treadmill", body: "This innovative therapy reduces the impact on joints while providing a challenging and effective workout, ideal for rehabilitation and improving cardiovascular health." },
    { title: "REAXING Wall", body: "An interactive device that trains the responsive ability through sudden and visual stimulations which can be applied to hands or feet while maintaining a high mental focus." },
    { title: "REAXING Treadmill", body: "Provides sudden and unpredictable inclinations in all directions while walking or running with dynamic interferences, for training and movement improvement purposes." },
    { title: "And More", body: "We continuously invest in advanced technologies to provide our patients with the best possible care." },
  ],
  image: "/images/cardio-deck.jpg",
};

export const pages: SubPage[] = [
  // ---------------- About ----------------
  {
    slug: "about",
    title: "About",
    eyebrow: "About Atlantis RC",
    headline: "Gold Coast's integrated allied health centre.",
    sub: "Psychology, physiotherapy, exercise physiology and hydrotherapy, in a purpose-built facility in Bundall on the Gold Coast.",
    image: "/images/arc-dumbbell-gym.jpg",
    chips: ["Purpose-built facility", "Integrated care", "Bundall, Gold Coast"],
    blocks: [
      {
        type: "split",
        eyebrow: "Who we are",
        heading: "Integrated, layered recovery programs.",
        body: [
          "Atlantis Recovery Centre is a multidisciplinary allied-health centre in Bundall on the Gold Coast, providing psychology, physiotherapy, exercise physiology and hydrotherapy. Atlantis RC partners innovation with world-leading technology and specialist clinicians to deliver integrated, layered recovery programs. Our integrated approach ensures a compassionate focus on the recovery journey of the human at the core of our work.",
          "Integrating with DVA, NDIS and health providers, Atlantis RC has created a purpose-built facility that offers in-house physiotherapy, exercise physiology, and psychology clinical services, alongside breakthrough technology. Atlantis RC provides use of Aqua tread hydrotherapy, proprioceptive and cognitive training through the REAX wall and treadmill, and infrared sauna to provide the full-spectrum of care and recovery.",
        ],
        image: "/images/poseidon-mural-dog.jpg",
      },
      fundingList,
      {
        type: "details",
        eyebrow: "Good to know",
        heading: "Common questions about getting started.",
        items: [
          { title: "Are there any services I can use without a referral?", body: "Yes you can book an appointment over the phone, email or in person with one of our physios, psychologists or exercise physiologist." },
          { title: "Who can come to Atlantis RC?", body: "We are inclusive of everyone. For some of our services you will need a referral." },
          { title: "How do I get a referral?", body: "You will need to visit a doctor to get a referral. If you don't have a regular GP, we are happy to help you find out what you need and point you in the right direction." },
          { title: "Is it expensive?", body: "While we have some of the most unique equipment in Australia, we are priced to allow anyone to come and see us." },
        ],
        image: "/images/gym-floor.jpg",
      },
      arcVideo,
      commitment,
    ],
  },
  // ---------------- Services ----------------
  {
    slug: "services",
    title: "Services",
    eyebrow: "Services",
    headline: "Your path to peak potential.",
    sub: "At Atlantis RC, a leading recovery centre on the Gold Coast, we're dedicated to helping you achieve your fullest potential.",
    image: "/images/cardio-deck.jpg",
    chips: ["Physiotherapy", "Psychology", "Exercise physiology", "Hydrotherapy"],
    blocks: [
      {
        type: "split",
        eyebrow: "Our services at Atlantis RC",
        heading: "Recover, perform, and thrive.",
        body: [
          "Whatever your personal goals, our comprehensive range of services is designed to support you every step of the way. Whether you're keen to recover from a physical or psychological injury, unlock new levels in your sporting or office performance, or perhaps your focus is simply to become the best version of yourself, the squad at Atlantis RC has you covered.",
          "We've created a purpose-built holistic health centre where physical rehabilitation and mental wellness converge to deliver powerful and lasting results. You can access all your Allied Health care needs under one roof, guided by an expert team using world-class technology you won't find anywhere else in Australia.",
        ],
        image: "/images/reax-run-console.jpg",
      },
      serviceCards,
      {
        type: "features",
        eyebrow: "What you get",
        heading: "Discover how our tailored services can help you recover, perform, and thrive.",
        items: [
          { title: "Comprehensive care", body: "Comprehensive care that addresses both physical and psychological needs at once.", image: "/images/bart-traynor-selfie.jpg" },
          { title: "Advanced equipment", body: "Access to advanced equipment and therapies.", image: "/images/infrared-sauna.jpg" },
          { title: "Evidence-based programs", body: "Evidence-based programs backed by precise progress tracking.", image: "/images/aquatread-control-panel.jpg" },
        ],
      },
      conditionCards,
      technologyCards,
      commitment,
    ],
  },
  // ---------------- Physiotherapy ----------------
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    eyebrow: "Physiotherapy",
    headline: "Physio the Atlantis RC way.",
    sub: "At Atlantis Recovery Centre, our physiotherapy service is focused on helping you move better, reduce pain and regain confidence in your body.",
    image: "/images/aquatread-control-panel.jpg",
    chips: ["Accepting referrals now", "Aquatread & infrared", "Milestone updates"],
    blocks: [
      {
        type: "split",
        eyebrow: "How we work",
        heading: "Practical treatment plans tailored to your needs and goals.",
        body: [
          "Our physiotherapists provide personalised assessment and treatment for musculoskeletal injuries, persistent pain, post-surgical rehabilitation, mobility concerns and physical recovery. We combine hands-on physiotherapy with exercise-based rehabilitation, hydrotherapy and advanced technology to create practical treatment plans tailored to your needs and goals.",
          "As part of our multidisciplinary allied health team in Bundall on the Gold Coast, our physiotherapists can also work alongside psychology and exercise physiology when a more integrated approach to recovery is beneficial.",
          "Whether you are recovering from injury, managing ongoing pain or working towards improved strength, mobility and function, our goal is to help you return to the activities that matter most.",
        ],
        image: "/images/aquatread-session.jpg",
      },
      {
        type: "features",
        eyebrow: "Atlantis RC has more to offer",
        heading: "Layering face-to-face treatment with state-of-the-art equipment.",
        intro: "With full access to all of our leading technology as standard, you will benefit from innovative treatment options only available to Atlantis RC.",
        items: [
          { title: "Aquatread / Infrared Treatments", body: "Utilising the Aquatread, our team can manage your weight-bearing to enable movements not possible on land. Combined with our infrared sauna, your treatment is smooth-sailing.", image: "/images/infrared-sauna.jpg" },
          { title: "Milestone Updates & More", body: "Our team will conduct complete body scans to provide you with milestone updates and track your progress, integrating this data into your treatment plans.", image: "/images/aquatread-control-panel.jpg" },
          { title: "Specialised", body: "Specialist in-house physiotherapists with extensive experience treating everyday, DVA, and NDIS clients.", image: "/images/aquatread-session.jpg" },
          { title: "Reducing Pain", body: "Our staff specialise in reducing pain symptoms, and increasing mobility, to improve your quality of life and rediscover your independence.", image: "/images/reaxing-treadmill.jpg" },
          { title: "Making Treatment Fun", body: "The ARC team layers face-to-face treatment with hydro therapy, our REAXING treadmill or REAXING wall and so much more in your sessions, giving you greater treatment flexibility, availability and consistency.", image: "/images/reaxing-light-wall.jpg" },
          { title: "Accepting Referrals Now", body: "Atlantis RC are welcoming patients now. Read our commitment to you.", image: "/images/team-sport-slogan.jpg" },
        ],
      },
      whoIsArcFor,
      {
        type: "split",
        eyebrow: "Physiotherapy Gold Coast",
        heading: "Expert care for pain relief and recovery.",
        body: [
          "Living on the Gold Coast means embracing an active lifestyle filled with surfing, sports, and outdoor adventures. When pain or injury threatens to sideline your quality of life, accessing expert physiotherapy services becomes essential for getting back to what you love most. The Gold Coast has established itself as a premier destination for comprehensive physiotherapy care, combining world-class expertise with a deep understanding of the local community's unique health and wellness needs.",
          "With over 600,000 residents leading increasingly active lives, the demand for exceptional physiotherapy services has driven the development of some of Australia's most advanced treatment facilities. From elite athletes recovering from sports injuries to families seeking pediatric care, and NDIS participants requiring specialised support, Gold Coast physiotherapists deliver personalised treatment plans that achieve optimal health outcomes for every individual.",
        ],
        image: "/images/beach-aerial.jpg",
      },
      fundingList,
      commitment,
    ],
  },
  // ---------------- Psychology ----------------
  {
    slug: "psychology",
    title: "Psychology",
    eyebrow: "Psychology",
    headline: "We don't just talk about problems. We move through them.",
    sub: "Our psychology team blends evidence-based therapy with innovative movement-based approaches, using advanced neuro-reactive tools like REAXING Lights, REAX Run proprioceptive treadmills, and real-time cognitive-motor training.",
    image: "/images/helping-hand-silhouette.jpg",
    chips: ["Functional psychology", "Activity-based psychotherapy", "Teens and adults"],
    blocks: [
      {
        type: "features",
        eyebrow: "How we're different",
        heading: "Therapy that combines mind and body for better results.",
        items: [
          { title: "Mind and body", body: "Therapy that combines mind and body for better results.", image: "/images/bart-traynor-selfie.jpg" },
          { title: "Action-oriented", body: "Action-oriented sessions for clients who struggle with talk therapy.", image: "/images/reaxing-wall-in-use.jpg" },
          { title: "Personalised programs", body: "Personalised programs for ADHD, anxiety, trauma, and more.", image: "/images/reaxing-light-wall.jpg" },
          { title: "Functional goals", body: "Functional goals that improve daily life and wellbeing.", image: "/images/team-sport-slogan.jpg" },
        ],
      },
      {
        type: "video",
        eyebrow: "Watch",
        heading: "Reactive training, not just talk.",
        body: "The REAXING lighting system challenges attention, reaction and coordination in real time.",
        videos: [videos.reaxing],
      },
      {
        type: "split",
        eyebrow: "Our hybrid psychology model",
        heading: "Functional Psychology blended with Activity-Based Psychotherapy (ABP).",
        body: [
          "At Atlantis Recovery Centre, we use a hybrid model that blends Functional Psychology with Activity-Based Psychotherapy (ABP). Functional Psychology helps clients understand and change the way their thoughts, emotions, and behaviours affect their everyday functioning. It focuses on real-world outcomes like better focus, emotional control, and meaningful action.",
          "Activity-based psychotherapy brings therapy to life, combining talk therapy with movement, body-based tasks, and sensory activities. This helps clients who struggle with traditional therapy by making sessions more interactive, grounded, and results-driven.",
          "We use tools like reactive lighting walls, cognitive-motor drills, breath-regulation tasks, and cardio equipment to support mental fitness, emotional resilience and nervous system balance. This hybrid model is ideal for ADHD, anxiety, trauma, and anyone ready to move beyond talking and into transformation.",
        ],
        image: "/images/reaxing-wall-clinician-client.jpg",
      },
      {
        type: "list",
        eyebrow: "What we help with",
        heading: "Our psychologists work with teens and adults to address a wide range of mental health and performance issues.",
        items: ["Anxiety and panic disorders", "Depression and low motivation", "ADHD and focus difficulties", "Trauma and PTSD", "Chronic stress and burnout", "Emotional regulation and executive functioning", "Low confidence, self-esteem, and goal setting"],
        image: "/images/bart-traynor-selfie.jpg",
      },
      {
        type: "split",
        eyebrow: "What to expect",
        heading: "Every psychology journey starts with a comprehensive assessment.",
        body: [
          "Each psychology journey at Atlantis Recovery Centre starts with a comprehensive assessment. From there, you and your psychologist will create a customised plan that may include individual therapy, movement-based activities, goal setting, and regular progress reviews using real data.",
          "At Atlantis RC, we understand that true recovery and peak performance encompass both physical and mental well-being. Our experienced psychologists provide a safe and confidential space to address a range of concerns, helping you to develop resilience, manage stress, improve cognitive function, and cultivate a positive mindset. Through evidence-based practices and a compassionate approach, our Psychology team works collaboratively with our other Allied Health professionals to ensure a truly holistic recovery and performance pathway.",
          "If you're ready for a more engaging, effective, and empowering approach to therapy, get in touch today.",
        ],
        image: "/images/psychology-collage.jpg",
        cta: { label: "Get in touch", href: "/contact" },
      },
      fundingList,
      commitment,
    ],
  },
  // ---------------- Exercise Physiology ----------------
  {
    slug: "exercise-physiology",
    title: "Exercise Physiology",
    eyebrow: "Exercise Physiology",
    headline: "Integrating physical and mental wellness.",
    sub: "At Atlantis Recovery Centre, Exercise Physiology is an integral component of our comprehensive treatment approach, offering numerous benefits to individuals seeking physical recovery and recovery from mental health disorders.",
    image: "/images/reaxing-treadmill-closeup.jpg",
    chips: ["Tailored programs", "Low wait times", "Physical and mental recovery"],
    blocks: [
      {
        type: "features",
        eyebrow: "Our programs are tailored to",
        heading: "Exercise is a powerful tool for recovery, not just for physical injuries but also for mental health.",
        items: [
          { title: "Boost Mood and Reduce Stress", body: "By promoting the release of endorphins, exercise naturally elevates mood, reduces anxiety, and helps combat depression, while also fostering self-esteem and a positive body image.", image: "/images/bart-traynor-selfie.jpg" },
          { title: "Restore Physical Vitality", body: "We focus on regaining strength, stamina, cardiovascular health, muscle tone, and overall vitality, crucial for both daily life and peak performance.", image: "/images/reax-run-console.jpg" },
          { title: "Develop Coping Skills", body: "Physical activity serves as an effective stress reduction technique, helping you build resilience and develop valuable coping mechanisms.", image: "/images/arc-dumbbells-closeup.jpg" },
          { title: "Enhance Cognitive Function", body: "Exercise stimulates neuroplasticity, positively impacting cognitive function, memory, and concentration.", image: "/images/reaxing-light-wall.jpg" },
        ],
      },
      {
        type: "video",
        eyebrow: "Watch",
        heading: "Reactive training on the REAXING systems.",
        body: "The REAXING lighting system challenges attention, reaction and coordination in real time.",
        videos: [videos.reaxing],
      },
      {
        type: "split",
        eyebrow: "Ready to take the first step?",
        heading: "Don't let pain, injury, or a chronic condition hold you back.",
        body: [
          "Our expert team is ready to help you rebuild your strength, restore your vitality, and take control of your health. We are committed to servicing new clients quickly and have low wait times, ensuring you can start your journey to recovery as soon as possible.",
          "Reach out to us today to book a callback with one of our expert team members. Let's start the conversation about your path to recovery.",
        ],
        image: "/images/reaxing-treadmill.jpg",
        cta: { label: "Book a callback", href: "/contact" },
      },
      fundingList,
    ],
  },
  // ---------------- Hydrotherapy ----------------
  {
    slug: "hydrotherapy",
    title: "Hydrotherapy",
    eyebrow: "Hydrotherapy",
    headline: "Hydrotread at Atlantis RC.",
    sub: "This custom-made underwater treadmill is the only Aquatread Hydrotherapy treadmill in Australia, providing a uniquely effective and low-impact environment for rehabilitation and training.",
    image: "/images/infrared-sauna.jpg",
    chips: ["Only one in Australia", "Low-impact", "All abilities"],
    blocks: [
      {
        type: "features",
        eyebrow: "Experience the benefits of advanced hydrotherapy",
        heading: "The Hydrotread revolutionises the way you recover and build strength.",
        items: [
          { title: "Reduced Weight-Bearing", body: "The buoyancy of water significantly lessens the impact on your joints, allowing for pain-free movement, running, walking, and jumping, even during early stages of recovery.", image: "/images/aquatread-session.jpg" },
          { title: "Enhanced Mobility and Coordination", body: "The water's natural resistance provides a gentle yet effective way to improve your range of motion, balance, and coordination.", image: "/images/aquatread-session-rings.jpg" },
          { title: "Increased Strength and Endurance", body: "Engage more muscles with less strain, building cardiovascular fitness, strength, and endurance efficiently.", image: "/images/aquatread-session.jpg" },
          { title: "Suitable for All Abilities", body: "From professional athletes seeking performance enhancement to individuals recovering from injuries or living with disabilities, the Hydrotread is adaptable to every fitness level and condition.", image: "/images/dumbbell-rack.jpg" },
        ],
      },
      {
        type: "video",
        eyebrow: "Watch",
        heading: "The Hydrotread, in action.",
        body: "See how the underwater treadmill lets clients walk, run and rebuild strength with a fraction of the load.",
        videos: [videos.hydroTread, videos.hydroReview],
      },
      {
        type: "split",
        eyebrow: "Ideal for diverse conditions",
        heading: "Start your journey with Atlantis RC today.",
        body: ["Whether you're rehabilitating from surgery, managing chronic pain, or looking to improve athletic performance, our Hydrotread offers a safe and highly effective solution."],
        image: "/images/gym-floor.jpg",
        cta: { label: "Learn more about the Aquatread", href: "/aquatred" },
      },
      commitment,
    ],
  },
  // ---------------- Mental Health ----------------
  {
    slug: "mental-health",
    title: "Mental Health",
    eyebrow: "What we treat",
    headline: "Treating mental health at Atlantis Recovery Centre.",
    sub: "At Atlantis RC, we believe in a holistic approach to healing and wellness. True recovery involves addressing both the physical and mental aspects of your health, as they are deeply interconnected.",
    image: "/images/bart-traynor-selfie.jpg",
    chips: ["Anxiety", "Depression", "ADHD", "PTSD", "Phobias", "OCD"],
    blocks: [
      {
        type: "split",
        eyebrow: "Not just in a room",
        heading: "Treating the whole person to break the cycle.",
        body: [
          "We integrate cutting-edge physical and mental therapies to deliver a more profound and sustainable outcome for our patients. We know that mental health challenges can manifest physically, and physical ailments can take a toll on your mental state. By treating the whole person, we can break this cycle and help you find a path to true recovery.",
          "For those struggling with mental health, our holistic approach can be particularly beneficial. We offer a supportive environment where you can explore and process your emotions while simultaneously engaging in physical therapies that can alleviate stress, improve mood, and boost overall energy. This integrated method helps to re-establish the mind-body connection, fostering resilience and a renewed sense of hope.",
        ],
        image: "/images/reaxing-wall-in-use.jpg",
      },
      { type: "list", eyebrow: "What we help with", heading: "A comprehensive and personalised treatment plan that empowers you to achieve lasting well-being.", items: ["Anxiety", "Depression", "ADHD", "PTSD", "Phobias", "OCD"], image: "/images/atlantis-collage-tall.jpg" },
      techList,
      whoIsArcFor,
      fundingList,
      commitment,
    ],
  },
  // ---------------- Chronic Pain ----------------
  {
    slug: "chronic-pain-and-disorders",
    title: "Chronic Pain & Disorders",
    eyebrow: "What we treat",
    headline: "Treatment of chronic pain and disorders.",
    sub: "Chronic pain is more than just a physical sensation; it's a complex and often debilitating condition that can impact every aspect of your life.",
    image: "/images/arc-dumbbells-closeup.jpg",
    chips: ["Long-term relief", "Holistic care", "Gold Coast"],
    blocks: [
      {
        type: "split",
        eyebrow: "Understanding chronic pain",
        heading: "We don't just treat the pain; we treat the person experiencing it.",
        body: [
          "At Atlantis Recovery Centre, we understand the profound challenges that come with persistent pain and the associated disorders. Our mission is to provide a holistic and compassionate approach to treatment, moving beyond temporary fixes to help you find long-term relief and reclaim your quality of life. Located on the beautiful Gold Coast, our purpose-built facility is a sanctuary for healing, where cutting-edge technology and expert care converge to support your journey to recovery.",
          "Chronic pain is typically defined as any pain that lasts for more than three to six months, or beyond the expected healing time of an injury or illness. Unlike acute pain, which is a signal of immediate harm, chronic pain often persists long after the initial cause has resolved. This can be due to a variety of factors, including nerve damage, inflammation, or a complex interplay between physical and psychological components. The constant presence of pain can lead to a cascade of other issues, such as sleep disturbances, anxiety, depression, and reduced mobility.",
          "The impact of chronic pain extends far beyond the physical. It can erode your ability to work, socialise, and engage in hobbies you once loved. It can strain relationships, leading to feelings of isolation and frustration. At Atlantis RC, we believe that true recovery requires addressing all of these facets: the physical, mental, and emotional.",
        ],
        image: "/images/gym-floor-session.jpg",
      },
      {
        type: "details",
        eyebrow: "Conditions we treat",
        heading: "Some of the conditions that we treat include.",
        items: [
          { title: "Chronic Pain" },
          { title: "Back Pain and Neck Pain", body: "Often stemming from a variety of causes, we provide targeted therapies to address the root of the problem." },
          { title: "Post-Surgical Pain", body: "We help patients recover and manage pain that persists after an operation." },
          { title: "Complex Regional Pain Syndrome (CRPS)", body: "A challenging condition, we provide specialised, multidisciplinary care to address the complex symptoms of CRPS." },
          { title: "Fibromyalgia", body: "A complex condition characterised by widespread pain, we offer a comprehensive plan that includes pain management, exercise, and psychological support." },
          { title: "Osteoporosis", body: "We focus on strengthening bones and muscles to reduce fracture risk and manage associated pain." },
          { title: "Migraines and Chronic Headaches", body: "We work to identify triggers and provide therapies to reduce the frequency and severity of headaches." },
          { title: "Arthritis (Osteoarthritis and Rheumatoid Arthritis)", body: "Our treatments focus on reducing joint pain and stiffness, improving mobility, and strengthening supporting muscles." },
          { title: "Neuropathic Pain", body: "Pain caused by nerve damage, we use advanced techniques to help manage symptoms and improve nerve function." },
          { title: "Temporomandibular Joint (TMJ) Disorders", body: "Our team provides targeted care to relieve jaw pain and improve function." },
        ],
        image: "/images/reax-run-console.jpg",
      },
      serviceCards,
      commitment,
    ],
  },
  // ---------------- Physical Rehabilitation ----------------
  {
    slug: "physical-rehabilitation",
    title: "Physical Rehabilitation",
    eyebrow: "What we treat",
    headline: "Physical rehabilitation and restorative care.",
    sub: "Returning to a life of full function, strength, and mobility after an injury, surgery, or due to a long-standing condition is the goal of physical rehabilitation.",
    image: "/images/aquatread-session.jpg",
    chips: ["Post-surgical recovery", "Sports injuries", "Joint replacement"],
    blocks: [
      {
        type: "split",
        eyebrow: "A holistic approach to restorative health",
        heading: "We don't just focus on the injured area; we treat the entire person.",
        body: [
          "At Atlantis Recovery Centre, we are dedicated to helping you achieve this goal, providing a comprehensive and supportive environment for your recovery. Our purpose-built facility on the Gold Coast is where state-of-the-art technology meets expert care, guiding you through a personalised journey to restore your body's potential and rediscover your active life.",
          "Our philosophy is built on the understanding that effective physical rehabilitation requires a holistic approach. We don't just focus on the injured area; we treat the entire person, addressing both the physical and mental aspects of recovery. Our multidisciplinary team of Physiotherapists, Exercise Physiologists, and other allied health professionals works collaboratively to design a tailored treatment plan that is as unique as you are. This integrated approach ensures that every facet of your rehabilitation is considered, leading to more robust and lasting results.",
        ],
        image: "/images/reaxing-treadmill.jpg",
      },
      {
        type: "details",
        eyebrow: "Conditions we treat",
        heading: "Our expert team is highly experienced in treating a wide range of conditions requiring physical rehabilitation.",
        items: [
          { title: "Physical Rehabilitation", body: "A broad term for restoring function and movement after any injury or illness." },
          { title: "Post-Surgical Recovery", body: "We provide tailored programs to help you regain strength and mobility safely and effectively after an operation." },
          { title: "Sports Injuries", body: "From sprains and strains to more complex conditions, we help athletes of all levels return to their peak performance." },
          { title: "Joint Replacement Rehabilitation", body: "Our programs are designed to help you recover quickly and fully after a joint replacement, focusing on pain management, strength, and range of motion." },
          { title: "Mobility Issues", body: "We work to improve your ability to move independently and with confidence, addressing underlying causes of restricted movement." },
          { title: "Balance Disorders", body: "Through specialised exercises and technologies like our VR system, we help you improve stability and reduce your risk of falls." },
          { title: "Tendonitis", body: "We provide targeted treatments to reduce inflammation and pain in affected tendons, helping to restore function." },
        ],
        image: "/images/aquatread-session-rings.jpg",
      },
      serviceCards,
      commitment,
    ],
  },
  // ---------------- Neurological & Cognitive ----------------
  {
    slug: "neurological-and-cognitive",
    title: "Neurological & Cognitive",
    eyebrow: "What we treat",
    headline: "Rebuilding connections at Atlantis RC.",
    sub: "Neurological and cognitive conditions can disrupt the very essence of how we move, think, and interact with the world. We help individuals with these challenges rebuild lost connections and reclaim their independence.",
    image: "/images/reaxing-light-wall.jpg",
    chips: ["Neuroplasticity", "Stroke recovery", "Atlantis VR"],
    blocks: [
      {
        type: "split",
        eyebrow: "A holistic and neuro-focused approach",
        heading: "Rooted in the principle of neuroplasticity.",
        body: [
          "Our philosophy is rooted in the principle of neuroplasticity: the brain's ability to reorganise itself by forming new neural connections throughout life. Our multidisciplinary team, including Physiotherapists, Exercise Physiologists, and Psychologists, collaborates to create comprehensive and individualised treatment plans. We go beyond addressing a single symptom, focusing on integrated therapies that stimulate the nervous system and promote cognitive and physical recovery. This holistic approach ensures that all aspects of a neurological or cognitive condition are addressed, leading to more meaningful and lasting improvements.",
        ],
        image: "/images/atlantis-collage-wide.jpg",
      },
      {
        type: "details",
        eyebrow: "Conditions we treat",
        heading: "Our expert team is highly experienced in treating a wide range of neurological and cognitive conditions.",
        items: [
          { title: "Neurological Disorders", body: "We provide comprehensive care for a variety of conditions affecting the nervous system." },
          { title: "Stroke Recovery", body: "Our programs are designed to help you regain movement, speech, and cognitive function after a stroke." },
          { title: "Autism Spectrum Disorder (ASD)", body: "We offer supportive therapies to help individuals develop skills and improve their quality of life." },
          { title: "Traumatic Brain Injury (TBI)", body: "We specialise in rehabilitation to address cognitive, physical, and emotional impairments following a TBI." },
          { title: "Multiple Sclerosis (MS)", body: "Our therapies focus on managing symptoms, maintaining mobility, and improving overall function." },
          { title: "Parkinson's Disease", body: "We provide specialised programs to help manage motor symptoms and maintain independence." },
          { title: "Dementia and Cognitive Decline", body: "We offer therapies to help slow cognitive decline and improve daily function." },
        ],
        image: "/images/vr-headset.jpg",
      },
      {
        type: "features",
        eyebrow: "Our specialised therapies",
        heading: "Innovative therapies and technologies, many exclusive to Atlantis Recovery Centre.",
        items: [
          { title: "Physiotherapy", body: "Our physiotherapists are skilled in neurorehabilitation, designing programs to improve balance, coordination, gait, and motor control. For conditions like stroke recovery and multiple sclerosis (MS), they use specific exercises to retrain movement patterns and build strength.", image: "/images/aquatread-control-panel.jpg" },
          { title: "Virtual Reality (VR) Therapy", body: "Our world-first Atlantis VR system creates an immersive and engaging environment to practice complex movements and tasks in a safe setting. Particularly effective for stroke recovery, traumatic brain injury (TBI), and balance disorders, it provides a powerful stimulus for the brain to create new pathways.", image: "/images/vr-headset.jpg" },
          { title: "Exercise Physiology", body: "Specialised exercise programs that build physical strength and stimulate cognitive function, using the REAXING Lighting Wall and REAXING Treadmill to create reactive and dynamic challenges that improve reaction time, cognitive processing, and coordination.", image: "/images/reaxing-light-wall.jpg" },
          { title: "Psychology", body: "Essential support for memory impairment, emotional regulation, and adapting to changes in daily life. For ASD, help developing social skills and coping strategies; for stroke recovery and TBI, helping individuals and families navigate the psychological impact of the condition.", image: "/images/helping-hand-silhouette.jpg" },
        ],
      },
      {
        type: "video",
        eyebrow: "Watch",
        heading: "Reactive training on the REAXING wall.",
        videos: [videos.reaxing],
      },
      commitment,
    ],
  },
  // ---------------- Lifestyle Conditions ----------------
  {
    slug: "lifestyle-conditions",
    title: "Lifestyle Conditions",
    eyebrow: "What we treat",
    headline: "Lifestyle conditions and proactive health.",
    sub: "Navigating the complexities of lifestyle conditions like obesity, cardiovascular issues, or diabetes can be a daunting challenge. At Atlantis Recovery Centre, we believe in a proactive and empowering approach to health.",
    image: "/images/gym-floor-session.jpg",
    chips: ["Personalised care", "Multidisciplinary", "Long-term success"],
    blocks: [
      {
        type: "split",
        eyebrow: "A holistic and empowering approach",
        heading: "We don't just treat the symptoms; we empower you.",
        body: [
          "Our mission is to help you manage these conditions, improve your overall well-being, and take control of your health journey. Located on the Gold Coast, our state-of-the-art facility combines expert care with innovative technology to provide you with a comprehensive plan for a healthier future.",
          "Our philosophy centers on personalised care and long-term success. We understand that lifestyle conditions are interconnected and require a multidisciplinary strategy. Our team of professionals, including Physiotherapists, Exercise Physiologists, and Psychologists, works together to create a customised program tailored to your specific needs and goals. We don't just treat the symptoms; we empower you with the knowledge, tools, and support you need to make lasting changes.",
        ],
        image: "/images/arc-dumbbells-closeup.jpg",
      },
      {
        type: "details",
        eyebrow: "Conditions we treat",
        heading: "Our expert team is highly experienced in treating a wide range of lifestyle conditions.",
        items: [
          { title: "Obesity", body: "We provide a comprehensive program to help you manage weight through a combination of exercise and lifestyle changes." },
          { title: "Cardiovascular Conditions", body: "Our focus is on improving heart health through safe and effective exercise programs." },
          { title: "Chronic Fatigue", body: "We offer a carefully managed approach to help you increase your energy levels and improve your quality of life." },
          { title: "Diabetes Management", body: "We help you control your blood sugar levels and improve overall health through tailored exercise and education." },
          { title: "Hypertension (High Blood Pressure)", body: "Our programs can help lower blood pressure and reduce the risk of associated health issues." },
          { title: "High Cholesterol", body: "We design exercise plans to improve your cholesterol profile and support a healthier lifestyle." },
          { title: "Pre- and Post-Natal Health", body: "We provide safe and effective programs to support women's health during and after pregnancy." },
        ],
        image: "/images/staff-member-with-dog.jpg",
      },
      {
        type: "features",
        eyebrow: "Our specialised therapies for lifestyle management",
        heading: "Specialised therapies designed to address the unique challenges of lifestyle conditions.",
        items: [
          { title: "Exercise Physiology", body: "A cornerstone of our approach, our Exercise Physiologists design safe and effective exercise programs to help you manage your condition, using cutting-edge technology like the Reaxing Lighting Wall and Reaxing Treadmill to make exercise engaging and to improve coordination and neurological function.", image: "/images/reaxing-treadmill-closeup.jpg" },
          { title: "Hydrotherapy", body: "Our hydrotherapy services, including the revolutionary Hydro Tread underwater treadmill system, provide a low-impact environment for exercise. Especially beneficial for individuals with obesity or joint pain, it allows for pain-free movement, helping you build strength and endurance without stress on your joints.", image: "/images/infrared-sauna.jpg" },
          { title: "Physiotherapy", body: "Our physiotherapists play a crucial role in improving mobility and function, helping with any musculoskeletal issues that may be preventing you from being active. For chronic fatigue, they can create a graded exercise program that prevents overexertion and promotes gradual improvement.", image: "/images/aquatread-control-panel.jpg" },
          { title: "Psychology", body: "Managing a chronic lifestyle condition can take a toll on your mental health. Our psychologists provide support for depression, anxiety, and the stress associated with making significant lifestyle changes, helping you develop coping strategies and maintain motivation.", image: "/images/helping-hand-silhouette.jpg" },
        ],
      },
      commitment,
    ],
  },
  // ---------------- ADHD Program ----------------
  {
    slug: "adhd-program",
    title: "ADHD Program",
    eyebrow: "6-week adult ADHD 1:1 treatment",
    headline: "Sync your mind & body: the ADHD Blueprint.",
    sub: "Our 6-week 1:1 programme in Bundall helps you stop fighting your biology and start syncing your mind and body using clinical psychology and vestibular neurology.",
    image: "/images/reaxing-wall-in-use.jpg",
    chips: ["Adult ADHD", "1:1 sessions", "Medicare rebate may apply"],
    blocks: [
      {
        type: "split",
        eyebrow: "Why tools aren't always enough",
        heading: "Focus isn't just a mental choice; it's a physical state.",
        body: [
          "We know the feeling of trying to 'will' yourself into focus while your nervous system feels like it's in overdrive. We've all been there. You buy the perfect planner, set the alarms, and commit to 'doing better', only to find your brain isn't ready to start.",
          "The truth is, focus isn't just a mental choice; it's a physical state. If your nervous system feels 'noisy' or unsettled, even the best tools in the world can't do their job. At Atlantis Recovery Centre, we don't just give you more 'hacks.' We use targeted movement to help your brain find its calm, focused centre so you can actually use the skills you already have.",
        ],
        image: "/images/reaxing-light-wall.jpg",
      },
      {
        type: "features",
        eyebrow: "The blueprint",
        heading: "Three pillars, six weeks.",
        items: [
          { title: "Trigger your brain's focus on-switch", body: "Move beyond the limits of willpower. We teach you targeted movement drills designed to trigger the dopamine and norepinephrine release your brain needs to naturally initiate tasks and overcome executive dysfunction.", image: "/images/reaxing-light-wall.jpg" },
          { title: "Physically ground your nervous system", body: "Access world-class reactive training equipment, including the REAXING treadmill and wall, to physically ground your nervous system. By stimulating your brain's balance centres, we stabilise attention at its biological source.", image: "/images/reaxing-treadmill-closeup.jpg" },
          { title: "Action-orientated active psychology", body: "Skip the passive talk-therapy couch. Our 1:1 Activity-Based Psychotherapy (ABP) sessions are high-engagement and results-driven. You will train your executive functions and build real-world coping skills in real-time, moving through mental blocks rather than just talking about them.", image: "/images/reaxing-wall-clinician-client.jpg" },
        ],
      },
      {
        type: "video",
        eyebrow: "Watch",
        heading: "Reactive training on the REAXING wall.",
        videos: [videos.reaxing],
      },
      {
        type: "split",
        eyebrow: "Funding & rebates",
        heading: "Participants may be eligible for a Medicare rebate per session.",
        body: ["Contact us to discuss further information. Your circumstances may vary."],
        image: "/images/team-sport-slogan.jpg",
        cta: { label: "Get started", href: "/contact" },
      },
      commitment,
    ],
  },
  // ---------------- Technology hub ----------------
  {
    slug: "technology",
    title: "ARC's Technology",
    eyebrow: "ARC's technology",
    headline: "The latest in technology.",
    sub: "We are proud to carry some of the most advanced treatment technology in Australia. Full access to all of our leading technology comes as standard.",
    image: "/images/dumbbell-rack.jpg",
    chips: ["Aquatread", "REAXING Light Wall", "REAXING Treadmill"],
    blocks: [
      technologyCards,
      techList,
      arcVideo,
      {
        type: "split",
        eyebrow: "Integrated innovation",
        heading: "A pillar of our integrated approach.",
        body: [
          "Alongside our Aquatread, REAXING Treadmill and Light Wall, Atlantis RC's technology suite complements our extensive range of services, including Physiotherapy, Psychology, Exercise Physiology and Hydrotherapy, ensuring you have access to a complete suite of advanced technologies unparalleled elsewhere in Australia.",
          "We strive to make our services accessible, working with various insurance providers to help ensure affordability and ease of access. Our commitment to providing progressive and effective treatments is backed by research and supported by government affiliations, including our collaborations with DVA and Bond University.",
        ],
        image: "/images/cardio-deck.jpg",
      },
      commitment,
    ],
  },
  // ---------------- Aquatread ----------------
  {
    slug: "aquatred",
    title: "Aquatread",
    eyebrow: "ARC's technology",
    headline: "Hydrotread: the future of aquatic rehabilitation.",
    sub: "A state-of-the-art, custom-made underwater treadmill that is truly unique in Australia, designed to accelerate your recovery, enhance your physical capabilities, and optimise your overall well-being.",
    image: "/images/aquatread-session.jpg",
    chips: ["Unique in Australia", "Up to 80% less load", "15x resistance of air"],
    blocks: [
      {
        type: "split",
        eyebrow: "The power of water",
        heading: "Unlocking unique benefits.",
        body: [
          "At Atlantis RC, we are proud to feature the Aquatread, a state-of-the-art, custom-made underwater treadmill that is truly unique in Australia. This advanced hydrotherapy system is designed to accelerate your recovery, enhance your physical capabilities, and optimise your overall well-being, making it a cornerstone of our holistic approach to health.",
          "The Hydrotread harnesses the natural therapeutic properties of water (buoyancy, hydrostatic pressure, and resistance) to create an ideal environment for rehabilitation, conditioning, and performance enhancement.",
        ],
        image: "/images/aquatread-session.jpg",
      },
      {
        type: "details",
        eyebrow: "Benefits",
        heading: "Rehabilitation, conditioning, and performance enhancement.",
        items: [
          { title: "Reduced Impact, Accelerated Healing", body: "The buoyancy of water significantly reduces the gravitational load on your joints and muscles, often by as much as 80% when chest-deep. This allows for pain-free movement, enabling you to begin rehabilitation earlier and progress more rapidly, even with injuries or conditions that limit land-based exercise. It's particularly beneficial for those recovering from surgery, managing arthritis, or dealing with chronic pain." },
          { title: "Enhanced Mobility and Flexibility", body: "The reduced weight-bearing environment promotes a greater range of motion, allowing for smoother, more expansive movements than on land. This helps improve joint flexibility and encourages natural gait patterns, crucial for restoring functional movement." },
          { title: "Optimal Strength and Endurance Training", body: "Moving through water provides natural, multi-directional resistance, which is 15 times greater than air. Our clinicians can precisely adjust the treadmill speed and water depth to customise the resistance, targeting specific muscle groups and progressively challenging you as you improve." },
          { title: "Improved Circulation and Reduced Swelling", body: "The hydrostatic pressure of the water exerts a gentle, even compression on the body. This helps to improve blood circulation, reduce swelling and inflammation (edema), and facilitate the removal of metabolic waste products, thereby accelerating muscle recovery and reducing soreness." },
          { title: "Pain Relief and Muscle Relaxation", body: "Warm water therapy promotes muscle relaxation and increased blood flow, which naturally alleviates pain and stiffness. The soothing effects of water can also help reduce stress and anxiety, contributing to a more comfortable and effective recovery process." },
          { title: "Balance and Coordination Enhancement", body: "The unstable yet supportive environment of water requires your body to constantly make small adjustments to maintain stability. This helps improve proprioception, balance, and coordination, which are vital for preventing falls and improving functional mobility." },
        ],
        image: "/images/infrared-sauna.jpg",
      },
      {
        type: "video",
        eyebrow: "Watch",
        heading: "The Hydrotread, in action.",
        videos: [videos.hydroTread, videos.hydroReview],
      },
      {
        type: "split",
        eyebrow: "Versatility for every journey",
        heading: "Integrated into your holistic care.",
        body: [
          "Whether you are a professional athlete aiming for peak performance, an individual recovering from a physical injury, or someone managing a chronic condition or disability, the Hydrotread offers a versatile and effective solution. It allows for a natural gait pattern to occur, which is often difficult to achieve in a static pool, and supports activities from gentle walking to high-intensity training.",
          "At Atlantis RC, the Hydrotread is seamlessly integrated into our comprehensive Allied Health services, including Physiotherapy, Exercise Physiology, and other therapeutic modalities. Our expert team leverages this patented and proven technology, exclusive to our centre in Australia, to provide customised and progressive treatment plans that deliver powerful results.",
        ],
        image: "/images/gym-floor.jpg",
        cta: { label: "Get in touch", href: "/contact" },
      },
      technologyCards,
      commitment,
    ],
  },
  // ---------------- REAXING Light Wall ----------------
  {
    slug: "reaxing-light-wall",
    title: "REAXING Light Wall",
    eyebrow: "ARC's technology",
    headline: "The REAXING Light Wall: elevating your performance and recovery.",
    sub: "An exclusive, state-of-the-art interactive training device designed to redefine your physical and cognitive capabilities through sudden, engaging visual stimulations.",
    image: "/images/reaxing-light-wall.jpg",
    chips: ["Reactive training", "Hands and feet", "Exclusive to Atlantis RC"],
    blocks: [
      {
        type: "split",
        eyebrow: "Unleashing your full potential",
        heading: "A dynamic training partner.",
        body: [
          "At Atlantis RC, we are proud to introduce the REAXING Light Wall, an exclusive, state-of-the-art interactive training device designed to redefine your physical and cognitive capabilities. This innovative technology is not just equipment; it's a dynamic training partner that pushes the boundaries of responsive ability through sudden, engaging visual stimulations.",
          "The REAXING Light Wall immerses you in a reactive environment that demands both physical agility and sharp mental focus. By engaging your hands and feet in quick, precise movements, it offers a multitude of benefits for athletes, individuals in rehabilitation, and anyone looking to enhance their overall performance.",
        ],
        image: "/images/reaxing-wall-clinician-client.jpg",
      },
      {
        type: "details",
        eyebrow: "Benefits",
        heading: "Sharpen your reflexes and the connection between mind and body.",
        items: [
          { title: "Increased Reaction Rate and Coordination", body: "Sharpen your reflexes and improve the seamless connection between your mind and body. The unpredictable nature of the lights forces immediate responses, significantly boosting your reactive speed and hand-eye/foot-eye coordination." },
          { title: "Enhanced Performance and Motor Skills", body: "Whether you're a professional athlete seeking that competitive edge or simply aiming to improve daily functional movements, the Lighting Wall refines your motor skills, leading to more fluid, efficient, and powerful actions." },
          { title: "Greater Muscle Engagement and Definition", body: "The dynamic and varied movements required by the system engage a wider range of muscle groups than traditional exercises, leading to more comprehensive muscle activation, improved strength, and enhanced definition." },
          { title: "Higher Calorie Burn and Metabolic Activation", body: "The intensity and responsiveness demanded by the Lighting Wall elevate your heart rate and metabolic activity, making for an incredibly efficient workout that maximises calorie expenditure and boosts your overall fitness." },
          { title: "Superior Injury Recovery and Functional Re-education", body: "For those in rehabilitation, the Reaxing Lighting Wall provides a safe and effective platform for functional re-education. It helps restore neural pathways and movement patterns, improving stability, balance, and proprioception in a challenging yet controlled environment." },
        ],
        image: "/images/reaxing-wall-in-use.jpg",
      },
      {
        type: "video",
        eyebrow: "See the REAXING Light Wall in action",
        heading: "Visual challenge.",
        videos: [videos.reaxing],
      },
      {
        type: "split",
        eyebrow: "Integrated innovation at Atlantis RC",
        heading: "Experience the thrill of reactive training.",
        body: [
          "The REAXING Light Wall is a key component of Atlantis RC's commitment to providing cutting-edge and holistic health solutions. It complements our extensive range of services, including Physiotherapy, Psychology, Exercise Physiology and Hydrotherapy. Alongside our Aquatread and REAXING Treadmill, the Light Wall ensures you have access to a complete suite of advanced technologies unparalleled elsewhere in Australia.",
          "Experience the thrill of reactive training and unlock new levels of performance and recovery with the REAXING Light Wall at Atlantis RC.",
        ],
        image: "/images/reaxing-light-wall.jpg",
        cta: { label: "Get in touch", href: "/contact" },
      },
      technologyCards,
      commitment,
    ],
  },
  // ---------------- REAXING Treadmill ----------------
  {
    slug: "reaxing-treadmill",
    title: "REAXING Treadmill",
    eyebrow: "ARC's technology",
    headline: "Unpredictable training for unmatched results.",
    sub: "Our exclusive REAXING Treadmill redefines traditional treadmill training by introducing sudden and unpredictable inclinations in all directions.",
    image: "/images/reaxing-treadmill-closeup.jpg",
    chips: ["Dynamic terrain", "Cognitive agility", "DVA & Bond University"],
    blocks: [
      {
        type: "split",
        eyebrow: "The REAXING Treadmill at Atlantis RC",
        heading: "An intelligent training platform that constantly challenges your body and mind.",
        body: [
          "At Atlantis RC, we're dedicated to pushing the boundaries of recovery and performance, and our exclusive REAXING Treadmill is a testament to this commitment. This state-of-the-art equipment redefines traditional treadmill training by introducing sudden and unpredictable inclinations in all directions. It's not just a treadmill; it's an intelligent training platform that constantly challenges your body and mind, mimicking real-world dynamic interferences.",
          "The REAXING Treadmill provides a uniquely effective environment for both advanced training and functional rehabilitation. By introducing unexpected shifts in terrain, it forces your body to adapt and react instantaneously, leading to a host of profound benefits.",
        ],
        image: "/images/reaxing-treadmill.jpg",
      },
      {
        type: "details",
        eyebrow: "Benefits",
        heading: "Adapt and react instantaneously.",
        items: [
          { title: "Increased Reaction Rate and Coordination", body: "Unlike static treadmills, the REAXING Treadmill demands rapid responses to dynamic changes, significantly improving your reflexes, balance, and neuromuscular coordination. This translates to quicker reactions in sports, daily activities, and improved stability to prevent falls." },
          { title: "Enhanced Performance and Motor Skills", body: "This unpredictable training hones your motor skills, making movements more precise, efficient, and powerful. Athletes will find an unparalleled edge in agility and responsiveness, while individuals in rehabilitation will regain more natural and confident movement patterns." },
          { title: "Greater Muscle Engagement and Definition", body: "The constant need to stabilise against sudden inclines and declines activates a wider array of muscle groups, including core stabilisers, in a way that traditional treadmills cannot." },
          { title: "Higher Calorie Burn and Metabolic Activation", body: "The dynamic nature of the workout elevates your heart rate and metabolic activity more effectively, resulting in a higher calorie expenditure and a significant boost to your overall cardiovascular fitness and metabolic rate." },
          { title: "Superior Injury Recovery and Functional Re-education", body: "For those recovering from injury, the REAXING Treadmill offers a controlled yet challenging environment to rebuild strength, improve proprioception, and re-educate functional movement patterns, reducing the risk of re-injury." },
          { title: "Cognitive Agility", body: "Beyond the physical benefits, the REAXING Treadmill also sharpens cognitive functions, requiring constant mental focus and quick decision-making in response to the changing surface." },
        ],
        image: "/images/reax-run-console.jpg",
      },
      {
        type: "split",
        eyebrow: "Accessible and evidence-backed support",
        heading: "A pillar of our integrated approach.",
        body: [
          "We strive to make our services accessible, working with various insurance providers to help ensure affordability and ease of access, with the potential for coverage by existing health care plans. Our commitment to providing progressive and effective treatments is backed by research and supported by government affiliations, including our collaborations with DVA and Bond University.",
          "The REAXING Treadmill is a vital component of Atlantis RC's cutting-edge technology suite. It complements our other advanced services, including Physiotherapy, Psychology, Exercise Physiology, Hydrotherapy (featuring our Aquatread), Virtual Reality with Atlantis VR, and Relaxation Massage. Together with the REAXING Lighting Wall, this technology empowers our expert team to deliver the most progressive and effective treatments available.",
        ],
        image: "/images/cardio-deck.jpg",
        cta: { label: "Get in touch", href: "/contact" },
      },
      whoIsArcFor,
      technologyCards,
      fundingList,
    ],
  },
  // ---------------- Refer ----------------
  {
    slug: "refer",
    title: "Refer to us",
    eyebrow: "For referrers",
    headline: "Accepting referrals now.",
    sub: "Atlantis RC are welcoming patients now, with low wait times.",
    image: "/images/treadmill-console.jpg",
    chips: ["Low wait times", "Fax 07 5609 6015", "One roof"],
    blocks: [
      {
        type: "split",
        eyebrow: "Send your referral",
        heading: "Helping your patients achieve their full potential.",
        body: [
          "At Atlantis RC, a leading recovery centre on the Gold Coast, we're dedicated to helping your patients achieve their full potential.",
          "We've developed a unique, purpose-built holistic health centre where physical rehabilitation and mental wellness seamlessly converge to deliver powerful and lasting results. You'll find all your Allied Health care needs conveniently located under one roof, supported by a world-class team and cutting-edge technology exclusive to Atlantis RC in Australia.",
          "Fax referrals to 07 5609 6015, email admin@atlantisrc.com.au, or call 07 5610 2312.",
        ],
        image: "/images/team-sport-slogan.jpg",
        cta: { label: "Contact the team", href: "/contact" },
      },
      fundingList,
      serviceCards,
      {
        type: "details",
        eyebrow: "Meet the team",
        heading: "Real clinicians behind every plan.",
        items: [
          { title: "Bart Traynor", body: "Director | Clinical Psychologist | AHPRA Board-Approved Clinical Supervisor" },
          { title: "Dr Yuri Lima", body: "Physiotherapist" },
          { title: "Sarah Savage", body: "Senior Exercise Physiologist" },
          { title: "Jeff Leech", body: "Clinical Psychologist" },
          { title: "Tom Hissey", body: "Senior Physiotherapist" },
          { title: "Lester Rafanan", body: "Physiotherapist" },
        ],
        image: "/images/reaxing-wall-clinician-client.jpg",
      },
    ],
  },
];

export const getPage = (slug: string) => pages.find((p) => p.slug === slug);
