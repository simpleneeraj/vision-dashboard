import { Divider } from "@heroui/react"

import ContentWrapper from "~components/content-wrapper"
import { SectionHeader } from "~components/section-header"
import PageView from "~components/view/page-view"
import { siteConfig } from "~config/site"

export default function TermsPage() {
  return (
    <PageView>
      <SectionHeader
        size="md"
        tagline="Terms of Service"
        title="Simple rules for using Vision Dashboard"
        highlight={{ action: "underline", color: "var(--color-orange-500)" }}
      />
      <Divider />
      <ContentWrapper>
        <p>
          Welcome to <strong>{siteConfig.name}</strong>! These Terms of Service
          explain the simple rules that apply when you use our Chrome extension.
          Because <strong>{siteConfig.name}</strong> is a{" "}
          <strong>local-first dashboard</strong>, your data stays on your device
          and is never stored on our servers. By using this product, you agree
          to these terms.
        </p>

        <h2>1. Free, Local-First Tool</h2>
        <p>
          <strong>{siteConfig.name}</strong> is a productivity dashboard that
          runs entirely in your browser. We do not require accounts, logins, or
          subscriptions. All your preferences (wallpapers, layout, themes, and
          shortcuts) are stored locally in your browser’s storage.
        </p>

        <h2>2. Acceptable Use</h2>
        <p>
          You agree to use <strong>{siteConfig.name}</strong> responsibly and
          only for lawful purposes. Prohibited activities include:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Using the extension for illegal activity</li>
          <li>Attempting to reverse engineer or tamper with the code</li>
          <li>Misrepresenting the extension as your own product</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          All code, design, and content related to{" "}
          <strong>{siteConfig.name}</strong> remain the property of its creator.
          You may not redistribute or sell the extension itself without
          permission. However, the personal settings and configurations you
          create are entirely yours.
        </p>

        <h2>4. Data & Privacy</h2>
        <p>
          We do not collect, transmit, or sell your data. All information
          remains on your device. For details, please see our{" "}
          <a href="/privacy-policy" className="text-orange-500 underline">
            Privacy Policy
          </a>
          .
        </p>

        <h2>5. Disclaimer of Warranty</h2>
        <p>
          <strong>{siteConfig.name}</strong> is provided “as is.” While we aim
          for reliability and smooth performance, we make no guarantees about
          uptime, accuracy, or fitness for a particular purpose.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for any
          damages that may result from using or being unable to use{" "}
          <strong>{siteConfig.name}</strong>.
        </p>

        <h2>7. Updates & Changes</h2>
        <p>
          We may update the extension or these Terms of Service from time to
          time. Continued use of <strong>{siteConfig.name}</strong> after
          updates means you accept the new terms.
        </p>

        <h2>8. Termination</h2>
        <p>
          You may stop using <strong>{siteConfig.name}</strong> at any time by
          removing it from your browser. We reserve the right to stop supporting
          or distributing the extension at our discretion.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          Have questions or feedback? Contact us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-orange-500 underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </ContentWrapper>
      <Divider />
    </PageView>
  )
}
