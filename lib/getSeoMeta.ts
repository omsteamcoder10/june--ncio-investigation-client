import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSeoMeta(slug: string, fallbackTitle: string): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/slug/${encodeURIComponent(slug)}`, {
      cache: 'no-store'
    });
    const data = await res.json();
    const seo = data.data;

    return {
      title: seo?.meta_title || fallbackTitle,
      description: seo?.meta_description || '',
      keywords: seo?.meta_keywords || '',
      openGraph: {
        title: seo?.meta_title || fallbackTitle,
        description: seo?.meta_description || '',
        images: seo?.og_image ? [seo.og_image] : [],
      },
    };
  } catch {
    return { title: fallbackTitle };
  }
}