// lib/constants.ts
import type { TeamMember, Service, GalleryPhoto, UpdatePost } from "@/types";

export const SITE_NAME = "NCIO";
export const SITE_FULL_NAME = "National Crime Investigates Organization";
export const SITE_PHONE = "+91 90925 92545";
export const SITE_EMAIL = "ncioindia@gmail.com";
export const SITE_ADDRESS = "Tirupur District, Tamil Nadu — 641 601";
export const SITE_HOURS = "Mon – Sat: 9:00 AM – 6:00 PM";

export const DISTRICTS = [
  "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore",
  "Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram",
  "Kanyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai",
  "Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai",
  "Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi",
  "Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli",
  "Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur",
  "Vellore","Villupuram","Virudhunagar",
];

export const ZONES = [
  "North Zone","South Zone","East Zone","West Zone","Central Zone",
];

export const STATS = [
  { label: "Members Across TN", value: "5,000+" },
  { label: "Districts Covered", value: "38" },
  { label: "Lives Impacted", value: "50,000+" },
  { label: "Years of Service", value: "10+" },
];

export const MEMBERSHIP_BENEFITS = [
  "Official NCIO Membership Certificate (digital + physical)",
  "NCIO Photo ID Card (Blue for District / Red for State level)",
  "Free legal consultation through NCIO's advocate network",
  "Access to exclusive training and skill development programs",
  "Priority assistance in RTI filing and follow-ups",
  "Invitations to NCIO events, camps, and gatherings",
  "Recognition on NCIO official website and social media",
  "Network with 5,000+ active members across Tamil Nadu",
];


export const SERVICES: Service[] = [
  {
    id: "rti",
    title: "RTI Services",
    shortDesc: "Right to Information application support",
    icon: "📋",
    description: [
      "The Right to Information Act, 2005 empowers every Indian citizen to request information from public authorities. NCIO helps you draft, file, and track RTI applications effectively.",
      "Our trained RTI activists guide you through the entire process — from identifying the correct public authority to drafting a precise application. We have helped hundreds of citizens obtain information about government schemes, project statuses, and official records.",
      "If your RTI application is denied or ignored, NCIO helps you file a First Appeal and if necessary, a Second Appeal to the State Information Commission. We ensure your right to information is not suppressed.",
      "Services include: RTI application drafting, filing assistance, response tracking, first and second appeals, and awareness workshops for communities.",
    ],
    photo: "/services/rti.webp",
  },
  {
    id: "legal",
    title: "Free Legal Services",
    shortDesc: "Free legal consultation and representation",
    icon: "⚖️",
    description: [
      "Access to justice should not depend on how much money you have. NCIO's Free Legal Services wing connects underprivileged citizens with qualified advocates who provide consultation at no cost.",
      "Our legal team handles cases related to property disputes, family law, consumer rights, labour disputes, and police complaints. We help citizens understand their rights and navigate the legal system confidently.",
      "Beyond individual cases, NCIO conducts regular legal literacy programs in villages and urban slums, training people to recognize when their rights are being violated and what steps to take.",
      "Services include: free legal consultation, document preparation, court referrals, Lok Adalat representation, and consumer forum complaints.",
    ],
    photo: "/services/free-legal.webp",
  },
  {
    id: "education",
    title: "Education Services",
    shortDesc: "Scholarships, books and tutoring for students",
    icon: "🎓",
    description: [
      "Education is the most powerful tool for breaking the cycle of poverty. NCIO's Education Services wing works to ensure that financial barriers do not prevent talented students from reaching their potential.",
      "We identify deserving students from low-income families and connect them with scholarship opportunities from government and private sources. Our volunteers assist with application forms and documentation.",
      "NCIO distributes free books, stationery, and school bags to students at the start of each academic year. We also run free tuition centres in several districts staffed by qualified volunteer teachers.",
      "Programs include: scholarship guidance, book distribution drives, free tuition centres, bridge courses for school dropouts, and vocational training for youth.",
    ],
    photo: "/services/education.webp",
  },
  {
    id: "nri",
    title: "NRI Services",
    shortDesc: "Support for Non-Resident Indians and their families",
    icon: "✈️",
    description: [
      "Thousands of Tamils work abroad, and their families back home often face challenges in property management, legal matters, and government documentation. NCIO's NRI Services wing provides dedicated support.",
      "We assist NRI families with property dispute resolution, power of attorney documentation, and representation in local courts. Our network of legal volunteers ensures that physical absence does not mean legal disadvantage.",
      "A critical part of our NRI work involves the rescue and rehabilitation of bonded or stranded labourers in the Gulf countries. We coordinate with embassies, the Ministry of External Affairs, and local authorities to bring affected individuals home.",
      "Services include: property dispute assistance, POA documentation, bonded labour rescue coordination, embassy liaison, and family welfare support.",
    ],
    photo: "/services/nri.webp",
  },
  {
    id: "medical",
    title: "Medical Camps",
    shortDesc: "Free healthcare camps in rural and urban areas",
    icon: "🏥",
    description: [
      "Quality healthcare remains inaccessible to millions of rural and urban poor citizens. NCIO organises free medical camps in underserved areas, bringing doctors, medicines, and diagnostics directly to communities.",
      "Each camp features general physicians, specialists (eye, dental, orthopaedic), and diagnostic services. Free medicines are distributed on the spot. Patients who require further treatment are referred to government hospitals with NCIO's support.",
      "Our medical camps have served over 50,000 patients across Tamil Nadu since our founding. We coordinate with retired doctors, medical colleges, and pharmaceutical companies to maximise our reach.",
      "Services include: general health checkups, specialist consultations, free medicines, diagnostic tests, health awareness sessions, and hospital referral support.",
    ],
    photo: "/services/medical.webp",
  },
  {
    id: "blood-donation",
    title: "Blood Donation",
    shortDesc: "Organized blood donation camps and emergency support",
    icon: "🩸",
    description: [
      "Blood donation is an act that can save multiple lives. NCIO organises regular blood donation camps across Tamil Nadu and maintains a live donor registry for emergency situations.",
      "Our camps are conducted in partnership with government hospitals and blood banks. We handle all logistics — venue, medical staff, refreshments, and post-donation care — making it easy and safe for donors to give.",
      "The NCIO Emergency Blood Network connects critically ill patients in need of rare blood groups with willing donors within hours. Many families have been saved from crisis through this network.",
      "Services include: donation camp organisation, donor registry maintenance, emergency blood coordination, rare blood group network, and thalassemia support.",
    ],
    photo: "/services/blood.webp",
  },
  {
    id: "environment",
    title: "Environment",
    shortDesc: "Tree planting drives and environmental awareness",
    icon: "🌳",
    description: [
      "Environmental protection is a responsibility we all share. NCIO's Environment wing conducts tree planting drives, beach and river cleanups, and environmental awareness programs across Tamil Nadu.",
      "We plant indigenous species of trees in schools, government lands, roadsides, and community spaces. Each sapling is tagged and monitored by local volunteers to ensure survival. NCIO has planted over 100,000 trees to date.",
      "Our awareness programs target schools, colleges, and village communities, educating citizens about plastic pollution, water conservation, and sustainable living practices.",
      "Programs include: tree planting drives, plastic collection campaigns, river and beach cleanup drives, school environmental clubs, and community composting initiatives.",
    ],
    photo: "/services/environment.webp",
  },
  {
    id: "hunger",
    title: "Hunger Relief",
    shortDesc: "Food distribution for the homeless and needy",
    icon: "🍛",
    description: [
      "No one should go to sleep hungry. NCIO's Hunger Relief program provides daily and weekly food distribution to homeless individuals, elderly citizens living alone, migrant workers, and families in crisis.",
      "Our volunteers prepare and distribute nutritious meals at regular locations in cities and towns across Tamil Nadu. The program runs 365 days a year, supported by donations from kind individuals and businesses.",
      "During natural disasters and emergencies, NCIO rapidly scales up food distribution to affected communities. We have served relief meals to thousands of families during floods and cyclones in Tamil Nadu.",
      "Programs include: daily meal distribution, emergency food relief, provision packets for displaced families, senior citizen nutrition support, and festival food drives.",
    ],
    photo: "/services/hunger.webp",
  },
];




// Mock admin data
export const MOCK_APPLICATIONS = [
  {
    id: "1", applicationId: "NCIO-APP-LX3K-AB12", fullName: "Rajesh Kumar", district: "Chennai",
    membershipType: "DISTRICT", appliedAt: "2025-06-01", status: "PENDING" as const,
    email: "rajesh@example.com", phone: "9876543210", zone: "North Zone", state: "Tamil Nadu",
    city: "Chennai", doorNo: "12A", street: "Anna Nagar", pinCode: "600040",
    gender: "Male", dateOfBirth: "1990-03-15", fatherHusbandName: "Kumar",
    aadharNumber: "123456789012", photoUrl: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "2", applicationId: "NCIO-APP-MN4P-CD34", fullName: "Priya Devi", district: "Coimbatore",
    membershipType: "STATE", appliedAt: "2025-05-28", status: "APPROVED" as const,
    email: "priya@example.com", phone: "9876543211", zone: "West Zone", state: "Tamil Nadu",
    city: "Coimbatore", doorNo: "5B", street: "RS Puram", pinCode: "641002",
    gender: "Female", dateOfBirth: "1985-07-22", fatherHusbandName: "Devi Prasad",
    aadharNumber: "234567890123", photoUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    memberId: "NCIO-TN-WZ-CBE-0525-0001", approvedAt: "2025-05-30",
  },
  {
    id: "3", applicationId: "NCIO-APP-QR5S-EF56", fullName: "Murugan S", district: "Madurai",
    membershipType: "DISTRICT", appliedAt: "2025-05-20", status: "REJECTED" as const,
    email: "murugan@example.com", phone: "9876543212", zone: "South Zone", state: "Tamil Nadu",
    city: "Madurai", doorNo: "8C", street: "KK Nagar", pinCode: "625020",
    gender: "Male", dateOfBirth: "1995-11-05", fatherHusbandName: "Subramaniam",
    aadharNumber: "345678901234", rejectionReason: "Incomplete documentation provided.",
  },
  {
    id: "4", applicationId: "NCIO-APP-TU6V-GH78", fullName: "Kavitha R", district: "Salem",
    membershipType: "ZONAL", appliedAt: "2025-06-05", status: "PENDING" as const,
    email: "kavitha@example.com", phone: "9876543213", zone: "Central Zone", state: "Tamil Nadu",
    city: "Salem", doorNo: "22D", street: "Fairlands", pinCode: "636016",
    gender: "Female", dateOfBirth: "1988-04-18", fatherHusbandName: "Ramasamy",
    aadharNumber: "456789012345",
  },
  {
    id: "5", applicationId: "NCIO-APP-WX7Y-IJ90", fullName: "Anbu Selvan", district: "Trichy",
    membershipType: "DISTRICT", appliedAt: "2025-06-08", status: "PENDING" as const,
    email: "anbu@example.com", phone: "9876543214", zone: "East Zone", state: "Tamil Nadu",
    city: "Trichy", doorNo: "3F", street: "Srirangam", pinCode: "620006",
    gender: "Male", dateOfBirth: "1992-09-30", fatherHusbandName: "Selvan",
    aadharNumber: "567890123456",
  },
];