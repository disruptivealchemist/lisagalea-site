/**
 * CMS Adapter — Phase 2
 *
 * All page content is fetched through this module.
 *
 * TODAY: returns structured data from local TypeScript files.
 * FUTURE: replace each function body with a CMS API call.
 *         Page components have zero awareness of the data source.
 *
 * Migration checklist (when adding a CMS):
 *  1. Install your CMS SDK (e.g. Contentful, Sanity, Builder.io content API).
 *  2. Map CMS field names to the types in @/lib/cms/types.
 *  3. Replace the `return localXxx` lines below with `await fetchFromCms(...)`.
 *  4. Make functions async and add `cache: 'no-store'` or ISR options as needed.
 *  5. No changes required in any page component.
 */

import { homeContent } from "@/lib/data/home";
import { aboutContent } from "@/lib/data/about";
import { servicesContent } from "@/lib/data/services";
import { contactContent } from "@/lib/data/contact";

export function getHomeContent() {
  return homeContent;
}

export function getAboutContent() {
  return aboutContent;
}

export function getServicesContent() {
  return servicesContent;
}

export function getContactContent() {
  return contactContent;
}
