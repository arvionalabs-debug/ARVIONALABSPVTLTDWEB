import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms governing use of the Arviona Labs website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="2026">
      <p>
        This website is operated by {COMPANY.legal}. By using it you agree to the
        terms set out on this page.
      </p>
      <h2>Content on this site</h2>
      <p>
        The site describes technology that is under active development. Product
        descriptions, architecture and roadmap material are statements of intent
        and design, not guarantees of availability, capability or delivery date.
      </p>
      <h2>Product demonstrations</h2>
      <p>
        Interactive demonstrations on this site are illustrative simulations of
        how the system is designed to behave.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The Arviona name, wordmark, site design, copy and visual system are the
        property of {COMPANY.legal}. Please do not reproduce them without written
        permission.
      </p>
      <h2>Contact</h2>
      <p>
        Write to <a className="text-ink underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
    </LegalPage>
  );
}
