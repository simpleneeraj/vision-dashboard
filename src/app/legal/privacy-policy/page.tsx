import { Divider } from "@heroui/react"

import ContentWrapper from "~components/content-wrapper"
import { SectionHeader } from "~components/section-header"
import PageView from "~components/view/page-view"
import { siteConfig } from "~config/site"

export default function PrivacyPolicyPage() {
  return (
    <PageView>
      <SectionHeader
        size="md"
        tagline="Privacy Policy"
        title="How we handle your data safely and transparently"
        highlight={{ action: "underline", color: "var(--color-orange-500)" }}
      />
      <Divider />
      <ContentWrapper>
        <p>
          At <strong>{siteConfig.name}</strong>, your privacy is our priority.
          We built this dashboard to be <strong>local-first</strong>, meaning
          your data stays on your device and never leaves your browser. This
          Privacy Policy explains our simple and transparent approach.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We do <strong>not</strong> collect or store personal information on
          our servers because we don’t have servers for this product. All your
          preferences (such as wallpapers, layout, theme, blur, and shortcuts)
          are stored locally in your browser’s storage.
        </p>

        <h2>2. How Your Data Is Used</h2>
        <p>Your settings are used only to:</p>
        <ul className="list-disc list-inside">
          <li>Customize your new tab experience.</li>
          <li>
            Save your preferences locally so they persist between sessions.
          </li>
        </ul>
        <p>
          None of this information is shared with us or transmitted elsewhere.
        </p>

        <h2>3. Sharing & Disclosure</h2>
        <p>
          We do not sell, share, or transfer your data. Since your data never
          leaves your browser, there is nothing for us to disclose.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          Your data lives only in your browser’s storage. You can clear it at
          any time by resetting or uninstalling the extension, or by clearing
          your browser storage.
        </p>

        <h2>5. Security</h2>
        <p>
          Because your data stays on your device, the main protection comes from
          your browser. We don’t have access to it. We recommend keeping your
          browser updated for the latest security patches.
        </p>

        <h2>6. Cookies & Analytics</h2>
        <p>
          <strong>{siteConfig.name}</strong> does not use cookies, tracking
          scripts, or analytics tools. We don’t monitor how you use the
          dashboard.
        </p>

        <h2>7. Children’s Privacy</h2>
        <p>
          This product does not knowingly collect any data from children under
          13. Since all settings remain local, there’s no personal information
          for us to access.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          <strong>{siteConfig.name}</strong> may let you add links or shortcuts
          to third-party websites. When you use those, their privacy policies
          apply. We encourage you to review them separately.
        </p>

        <h2>9. Updates to This Policy</h2>
        <p>
          We may revise this Privacy Policy if our extension adds new features
          in the future. If that happens, we’ll update the “Last Updated” date
          at the top of this page.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach out
          to us at{" "}
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
