const RAW_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const API_URL = RAW_API_URL.endsWith("/api")
  ? RAW_API_URL
  : `${RAW_API_URL}/api`;

interface SiteTag {
  id: number;
  platform_key: string;
  display_label: string;
  placement: string;
  tag_code: string;
  is_active: boolean;
}

export async function getSiteTags(
  placement: string
): Promise<SiteTag[]> {
  try {
    const res = await fetch(
      `${API_URL}/tags/active?placement=${placement}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}