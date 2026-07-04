import { getSeoMeta } from "@/lib/getSeoMeta";
import type { ReactNode } from "react";

export async function generateMetadata() {
  return getSeoMeta("/member-portal", "Member Portal - NCIO");
}

export default function MemberPortalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
