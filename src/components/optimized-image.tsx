import { getImageProps, type ImageProps } from "next/image";
import { images } from "@/lib/images";

// Keep responsive Next.js image optimization without hydrating an image component.
// No client-only loading events or blur placeholders are needed on this landing.
export function OptimizedImage(
  props: Omit<
    ImageProps,
    "placeholder" | "onLoad" | "onError" | "onLoadingComplete" | "preload"
  >,
) {
  const source =
    typeof props.src === "string" ? images[props.src] || props.src : props.src;
  const { props: imageProps } = getImageProps({ ...props, src: source });
  return <img {...imageProps} />;
}
