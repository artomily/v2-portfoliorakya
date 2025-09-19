export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  image: string;
  description: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "2024-01-15",
    credentialId: "AWS-SA-123456",
    verificationUrl: "https://aws.amazon.com/verification",
    image: "/api/placeholder/300/200",
    description:
      "Validasi keahlian dalam merancang dan deploy aplikasi yang scalable di AWS cloud platform.",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "RDS"],
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    issueDate: "2023-11-20",
    credentialId: "GCP-DEV-789012",
    verificationUrl: "https://cloud.google.com/certification/verify",
    image: "/api/placeholder/300/200",
    description:
      "Sertifikasi pengembangan aplikasi cloud-native menggunakan Google Cloud Platform.",
    skills: ["GCP", "Kubernetes", "Cloud Functions", "BigQuery"],
  },
  {
    id: 3,
    title: "Meta Frontend Developer",
    issuer: "Meta (Facebook)",
    issueDate: "2023-09-10",
    credentialId: "META-FE-345678",
    verificationUrl: "https://www.coursera.org/verify",
    image: "/api/placeholder/300/200",
    description:
      "Program sertifikasi frontend development dengan fokus pada React dan modern web development.",
    skills: ["React", "JavaScript", "HTML/CSS", "Git", "Figma"],
  },
  {
    id: 4,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    issueDate: "2023-07-05",
    credentialId: "AZURE-AZ900-901234",
    verificationUrl: "https://www.credly.com/badges",
    image: "/api/placeholder/300/200",
    description:
      "Pengenalan dasar tentang cloud services dan konsep fundamental Microsoft Azure.",
    skills: ["Azure", "Cloud Computing", "Virtual Machines", "Storage"],
  },
  {
    id: 5,
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    issueDate: "2023-05-18",
    credentialId: "DCA-567890",
    verificationUrl: "https://certification.docker.com",
    image: "/api/placeholder/300/200",
    description:
      "Validasi keahlian dalam containerization dan orchestration menggunakan Docker.",
    skills: ["Docker", "Containerization", "Docker Compose", "DevOps"],
  },
  {
    id: 6,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    issueDate: "2023-03-22",
    credentialId: "MDB-DEV-234567",
    verificationUrl: "https://university.mongodb.com/verify",
    image: "/api/placeholder/300/200",
    description:
      "Sertifikasi pengembangan aplikasi menggunakan MongoDB sebagai database NoSQL.",
    skills: ["MongoDB", "NoSQL", "Aggregation", "Indexing", "Schema Design"],
  },
];
