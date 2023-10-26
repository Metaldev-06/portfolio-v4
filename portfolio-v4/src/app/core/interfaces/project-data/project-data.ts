// Generated by https://quicktype.io

export interface ProjectDataResponse {
  data: ProjectDataResponseDatum[];
  meta: Meta;
}

export interface ProjectDataResponseDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: Locale;
  primary: boolean;
  important: boolean;
  technology: string[];
  server_status: boolean | null;
  deploy_status: boolean;
  image: Image;
}

export interface Image {
  data: ImageDatum[];
}

export interface ImageDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
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
}

export interface Formats {
  small: Medium;
  medium: Medium;
  thumbnail: Medium;
}

export interface Medium {
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
  ImageJPEG = 'image/jpeg',
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

export enum Locale {
  EsAR = 'es-AR',
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
