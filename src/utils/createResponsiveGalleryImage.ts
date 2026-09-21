import { getImage, type ImageMetadata } from 'astro:assets'

const fullImageWidths = [1200, 2000]

export const fullImageSizes =
  '(max-width: 640px) calc(100vw - 1.5rem), calc(100vw - 10rem)'

export const createResponsiveGalleryImage = async (
  src: ImageMetadata,
  quality: number,
) => {
  const widths = Array.from(
    new Set(fullImageWidths.map((width) => Math.min(src.width, width))),
  ).sort((first, second) => first - second)

  const candidates = await Promise.all(
    widths.map((width) =>
      getImage({
        src,
        width,
        format: 'webp',
        quality,
      }),
    ),
  )

  return {
    src: candidates.at(-1)?.src ?? src.src,
    srcset: candidates
      .map((candidate, index) => `${candidate.src} ${widths[index]}w`)
      .join(', '),
  }
}
