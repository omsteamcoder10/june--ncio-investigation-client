const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getSeoData(page: string) {
  try {
    const res = await fetch(`${API_BASE}/seo/${page}`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch SEO");
    return await res.json();
  } catch (err) {
    console.error(`SEO fetch failed for ${page}:`, err);
    return null;
  }
}

export function buildMetadata(page: string, fallback: { title: string; description: string }) {
  return async function generateMetadata() {
    const seo = await getSeoData(page);

    const title = seo?.meta_title || fallback.title;
    const description = seo?.meta_description || fallback.description;
    const ogImage = seo?.og_image;

    return {
      title,
      description,
      keywords: seo?.meta_keywords || undefined,
      alternates: seo?.canonical_url ? { canonical: seo.canonical_url } : undefined,
      openGraph: {
        title: seo?.og_title || title,
        description: seo?.og_description || description,
        type: seo?.og_type || "website",
        images: ogImage ? [{ url: ogImage }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: seo?.twitter_title || title,
        description: seo?.twitter_description || description,
        images: seo?.twitter_image ? [seo.twitter_image] : undefined,
      },
      robots: {
        index: seo?.robots_index !== false,
        follow: seo?.robots_follow !== false,
      },
    };
  };
}