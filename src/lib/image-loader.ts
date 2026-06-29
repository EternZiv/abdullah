import { SITE_CONFIG } from "@/lib/constants";

interface ImageLoaderParams {
  src: string;
  width?: number;
  quality?: number;
}

export default function imageLoader({ src }: ImageLoaderParams): string {
  return `${SITE_CONFIG.basePath}${src}`;
}
