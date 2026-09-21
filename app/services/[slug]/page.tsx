import { notFound } from "next/navigation";

import FloatingButtons from "@/components/layout/FloatingButtons";
import PageBanner from "@/components/shared/PageBanner";
import ServiceDetail from "@/components/services/ServiceDetail";
import { SERVICES } from "@/lib/constants";
import { getSeoMeta } from "@/lib/getSeoMeta";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return getSeoMeta(
    `/services/${params.slug}`,
    `${params.slug} - NCIO Services`
  );
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: service.title },
        ]}
      />

      <ServiceDetail service={service} />

      <FloatingButtons />
    </>
  );
}