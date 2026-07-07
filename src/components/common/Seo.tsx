import { Helmet } from "react-helmet-async";
import { seo, siteInfo } from "../../data/site";

export function Seo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteInfo.title,
    description: seo.description,
    organizer: siteInfo.organization,
    url: siteInfo.baseUrl,
  };

  return (
    <Helmet>
      <title>{seo.pageTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(", ")} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.openGraphTitle} />
      <meta property="og:description" content={seo.openGraphDescription} />
      <meta property="og:url" content={siteInfo.baseUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.openGraphTitle} />
      <meta name="twitter:description" content={seo.openGraphDescription} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
