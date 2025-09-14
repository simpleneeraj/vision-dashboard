import { Divider } from "@heroui/react"

import ContentWrapper from "~components/content-wrapper"
import { SectionHeader } from "~components/section-header"
import PageView from "~components/view/page-view"
import { siteConfig } from "~config/site"

export default function SupportPage() {
  return (
    <PageView>
      <SectionHeader
        size="md"
        tagline="Help & Support"
        title={`Need help with ${siteConfig.name}?`}
        highlight={{ action: "underline", color: "var(--color-orange-500)" }}
      />
      <Divider />
      <ContentWrapper className="flex flex-col gap-4">
        <p>
          We designed <strong>{siteConfig.name}</strong> to be lightweight,
          distraction-free, and easy to use. If you run into any issues or have
          feedback, we’re here to help.
        </p>

        <h2>1. Frequently Asked Questions (FAQ)</h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Where is my data stored?</strong>
            All your preferences and data are stored locally in your browser
            using Chrome’s local storage. We do not store or process your data
            on external servers.
          </li>
          <li>
            <strong>Do I need an account?</strong>
            No accounts or sign-ups are required. Everything works out of the
            box, local-first.
          </li>
          <li>
            <strong>How do I reset my dashboard?</strong>
            You can clear your browser storage from Chrome settings to reset
            your dashboard to its default state.
          </li>
        </ul>

        <h2>2. Contact Support</h2>
        <p>
          For bug reports, feature requests, or general questions, please reach
          out to us via{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-orange-500 underline">
            {siteConfig.email}
          </a>
          .
        </p>

        <h2>3. Community & Feedback</h2>
        <p>
          Join the conversation, share feedback, or report issues on our{" "}
          <a
            href={siteConfig.links.github}
            className="text-orange-500 underline">
            GitHub repository
          </a>
          . We actively welcome contributions and suggestions to improve{" "}
          <strong>{siteConfig.name}</strong>.
        </p>

        <h2>4. Troubleshooting Tips</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Ensure Chrome is updated to the latest version.</li>
          <li>Try disabling conflicting extensions that modify the new tab.</li>
          <li>
            Clear Chrome local storage if widgets or preferences don’t load
            correctly.
          </li>
        </ul>

        <h2>5. Thank You</h2>
        <p>
          Your support means a lot. <strong>{siteConfig.name}</strong> is built
          for mindful productivity, and your feedback helps us make it even
          better.
        </p>
      </ContentWrapper>
      <Divider />
    </PageView>
  )
}
