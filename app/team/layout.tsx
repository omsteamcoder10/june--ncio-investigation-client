import { getSeoMeta } from "@/lib/getSeoMeta";
import type { ReactNode } from "react";

export async function generateMetadata() {
  return getSeoMeta("/team", "Our Team - NCIO");
}

export default function TeamLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
