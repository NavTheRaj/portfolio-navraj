export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  fullName: string;
  headline: string;
  location: string;
  summary: string;
  industry: string;
  socials: SocialLink[];
};

export type Experience = {
  company: string;
  title: string;
  location: string;
  startedOn: string;
  finishedOn: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  notes: string;
};

export type Project = {
  title: string;
  description: string;
  startedOn: string;
  finishedOn: string;
  url?: string;
};

export type Certification = {
  name: string;
  authority: string;
  startedOn: string;
  url?: string;
};

export type Language = {
  name: string;
  proficiency: string;
};

export type Recommendation = {
  recommender: string;
  role: string;
  company: string;
  text: string;
  creationDate: string;
};

export type CommunityStats = {
  connections: number;
  reactions: number;
  comments: number;
  shares: number;
  certifications: number;
  recommendations: number;
};

export type Portfolio = {
  profile: Profile;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  skills: string[];
  certifications: Certification[];
  languages: Language[];
  recommendations: Recommendation[];
  communityStats: CommunityStats;
};
