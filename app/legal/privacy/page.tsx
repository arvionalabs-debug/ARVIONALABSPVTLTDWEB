import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Arviona Labs handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" updated="2026">
      <p>
        This website is an informational site for {COMPANY.legal}. It is designed
        to describe what the company is building and how schools can get in touch.
      </p>
      <h2>Forms on this site</h2>
      <p>
        The school partnership form on this site is currently a demonstration
        interface. No backend service is connected to it, so information entered
        into it is not transmitted to a server and is not stored by us.
      </p>
      <h2>Contacting us directly</h2>
      <p>
        If you contact Arviona Labs by email, we hold what you send us for the
        purpose of replying to you and discussing a possible partnership. We do
        not sell it and we do not pass it to third parties for their own use.
      </p>
      <h2>Analytics</h2>
      <p>
        No third-party analytics or advertising trackers are embedded in this site
        at present. If that changes, this page will be updated before it does.
      </p>
      <h2>Questions</h2>
      <p>
        Write to <a className="text-ink underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
    </LegalPage>
  );
}
