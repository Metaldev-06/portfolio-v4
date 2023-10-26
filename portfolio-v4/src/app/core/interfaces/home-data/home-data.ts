// Generated by https://quicktype.io

export interface HomeDataResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  about_me: string;
  services: Service[];
  projects: Projects;
  image_profile: ImageData;
  resume_cv: ResumeCv;
  skills: Skills;
  certifications: Certifications;
}

export interface ImageData {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number | null;
  height: number | null;
  formats: Formats | null;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

export enum EXT {
  Jpg = '.jpg',
  PDF = '.pdf',
  PNG = '.png',
}

export interface Formats {
  large?: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ApplicationPDF = 'application/pdf',
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
  ImageSVGXML = 'image/svg+xml',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}

export enum Provider {
  Cloudinary = 'cloudinary',
}

export interface Projects {
  data: ProjectsDatum[];
}

export interface ProjectsDatum {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  primary: boolean;
  important: boolean;
  technology: string[];
  server_status: boolean | null;
  deploy_status: boolean;
  image: ImageData;
}

export interface ResumeCv {
  data: DAT;
}

export interface Service {
  name: string;
  image: string;
}

export interface Skills {
  data: SkillsDatum[];
}

export interface SkillsDatum {
  id: number;
  attributes: IndigoAttributes;
}

export interface IndigoAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  stack: Stack;
  image: ImageDataSkill;
}

export interface ImageDataSkill {
  data: DAT;
}

export enum Stack {
  Backend = 'backend',
  Database = 'database',
  Frontend = 'frontend',
  Library = 'library',
}

export interface Certifications {
  data: CertificationsDatum[];
}

export interface CertificationsDatum {
  id: number;
  attributes: CertificationsAttributes;
}

export interface CertificationsAttributes {
  name: string;
  class: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  image: ImageData;
}

export interface Meta {}