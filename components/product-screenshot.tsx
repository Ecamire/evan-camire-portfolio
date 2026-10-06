import Image from "next/image";
import type { ProductMedia } from "@/lib/content";

export function ProductScreenshot({ media }: { media: ProductMedia }) {
  return <Image className="product-screenshot" src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(max-width: 767px) 100vw, 50vw" />;
}
