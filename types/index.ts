// types/index.ts

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  district: string;
  photo: string;
  greeting: string;
}

export interface Service {
  id: string;
  title: string;
  name?: string;  // optional alias for title
  icon: string;
  description: string[];
  shortDesc?: string;
  photo: string;
  slug?: string;
}

export interface GalleryPhoto {
  url: string;
  caption: string;
}

export interface UpdatePost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  photoUrl: string;
}

export interface AdminApplication {
  id: string;
  applicationId: string;
  fullName: string;
  district: string;
  membershipType: string;
  appliedAt: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  email: string;
  phone: string;
  zone: string;
  state: string;
  city: string;
  doorNo: string;
  street: string;
  pinCode: string;
  gender: string;
  dateOfBirth: string;
  fatherHusbandName: string;
  aadharNumber: string;
  photoUrl?: string;
  memberId?: string;
  approvedAt?: string;
  rejectionReason?: string;
  adminNotes?: string;
}

export interface DonationFormData {
  amount: number;
  customAmount?: string;
  donorName: string;
  phone: string;
  email: string;
}

export interface MembershipFormData {
  fullName: string;
  dateOfBirth: string;
  fatherName: string;
  guardianName?: string;
  gender: string;
  nationality: string;
  doorNo: string;
  street: string;
  city: string;
  district: string;
  zone: string;
  state: string;
  pinCode: string;
  phone: string;
  email: string;
  aadharNumber: string;
  education: string;
  qualificationDetails?: string;  // Made optional with ?
  membershipType: "DISTRICT" | "STATE" | "ZONAL";
  previousMembership?: string;
  photo?: string;
  signature?: string;
  declaration: boolean;
  applicationId?: string; // <-- ADD THIS LINE
}