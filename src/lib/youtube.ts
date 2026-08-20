// src/lib/youtube.ts

/**
 * Extract YouTube video ID from various URL formats
 */
export function getYouTubeId(url: string): string {
  if (!url) return "";
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]+)/,
    /(?:youtu\.be\/)([\w-]+)/,
    /(?:youtube\.com\/embed\/)([\w-]+)/,
    /(?:youtube\.com\/v\/)([\w-]+)/,
    /(?:youtube\.com\/shorts\/)([\w-]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return "";
}

/**
 * Get YouTube thumbnail URL
 */
export function getYouTubeThumbnail(videoId: string, quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'maxres'): string {
  const qualities = {
    default: 'default.jpg',
    hq: 'hqdefault.jpg',
    mq: 'mqdefault.jpg',
    sd: 'sddefault.jpg',
    maxres: 'maxresdefault.jpg',
  };
  return `https://img.youtube.com/vi/${videoId}/${qualities[quality]}`;
}

/**
 * Get YouTube embed URL
 */
export function getYouTubeEmbedUrl(videoId: string, options: { autoplay?: boolean; rel?: boolean; modest?: boolean } = {}): string {
  const { autoplay = false, rel = false, modest = true } = options;
  const params = new URLSearchParams();
  if (autoplay) params.set('autoplay', '1');
  if (!rel) params.set('rel', '0');
  if (modest) params.set('modestbranding', '1');
  params.set('enablejsapi', '1');
  
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}