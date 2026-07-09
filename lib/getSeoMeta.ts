import type { Metadata } from 'next';

const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const API_URL = RAW_API_URL.endsWith('/api') ? RAW_API_URL : `${RAW_API_URL}/api`;

export async function getSeoMeta(slug: string, fallbackTitle: string): Promise<Metadata> {
  const page = slug === '/' ? 'home' : slug.replace(/^\//, '');

  try {
    const res = await fetch(`${API_URL}/seo/${page}`, {
      cache: 'no-store'
    });
    const seo = await res.json();

    return {
      title: seo?.meta_title || fallbackTitle,
      description: seo?.meta_description || '',
      keywords: seo?.meta_keywords || '',
      alternates: seo?.canonical_url ? { canonical: seo.canonical_url } : undefined,
      openGraph: {
        title: seo?.og_title || seo?.meta_title || fallbackTitle,
        description: seo?.og_description || seo?.meta_description || '',
        type: (seo?.og_type as any) || 'website',
        images: seo?.og_image ? [{ url: seo.og_image }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: seo?.twitter_title || seo?.meta_title || fallbackTitle,
        description: seo?.twitter_description || seo?.meta_description || '',
        images: seo?.twitter_image ? [seo.twitter_image] : [],
      },
      robots: {
        index: seo?.robots_index !== false,
        follow: seo?.robots_follow !== false,
      },
    };
  } catch {
    return { title: fallbackTitle };
  }
}