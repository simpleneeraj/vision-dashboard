import { Divider } from "@heroui/react"

import ContentWrapper from "~components/content-wrapper"
import { SectionHeader } from "~components/section-header"
import PageView from "~components/view/page-view"
import { siteConfig } from "~config/site"

export default function CreditsPage() {
  return (
    <PageView>
      <SectionHeader
        size="md"
        tagline="Open Source & Credits"
        title={`Acknowledging the amazing work that powers ${siteConfig.name}`}
        highlight={{ action: "underline", color: "var(--color-orange-500)" }}
      />
      <Divider />
      <ContentWrapper className="flex flex-col gap-4">
        <p>
          <strong>{siteConfig.name}</strong> is built with love for developers
          and creators. We are grateful to the open-source community, Figma
          community, and third-party contributors whose tools, libraries, and
          assets help make this platform possible.
        </p>

        <h2>1. Core Frameworks & Libraries</h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Next.js</strong> – React framework for production apps.{" "}
            <a href="https://nextjs.org" className="text-orange-500 underline">
              nextjs.org
            </a>
          </li>
          <li>
            <strong>Plasmo</strong> – Browser extension development framework.{" "}
            <a href="https://plasmo.com" className="text-orange-500 underline">
              plasmo.com
            </a>
          </li>
          <li>
            <strong>React</strong> – A JavaScript library for building user
            interfaces.{" "}
            <a href="https://reactjs.org" className="text-orange-500 underline">
              reactjs.org
            </a>
          </li>
          <li>
            <strong>Tailwind CSS</strong> – Utility-first CSS framework for
            rapid UI development.{" "}
            <a
              href="https://tailwindcss.com"
              className="text-orange-500 underline">
              tailwindcss.com
            </a>
          </li>
          <li>
            <strong>Zustand</strong> – Fast, small, and scalable state
            management.{" "}
            <a
              href="https://zustand-demo.pmnd.rs"
              className="text-orange-500 underline">
              zustand.pmnd.rs
            </a>
          </li>
          <li>
            <strong>TypeScript</strong> – Typed superset of JavaScript.{" "}
            <a
              href="https://www.typescriptlang.org"
              className="text-orange-500 underline">
              typescriptlang.org
            </a>
          </li>
          <li>
            <strong>HeroUI</strong> – UI components and theme library.{" "}
            <a href="https://heroui.com" className="text-orange-500 underline">
              heroui.com
            </a>
          </li>
        </ul>

        <h2>2. Figma Community Resources</h2>
        <p>
          This app builds upon and adapts several open-source design files from
          the Figma Community. We gratefully acknowledge the creators and their
          contributions:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <a
              href="https://www.figma.com/community/file/1257790063571226666"
              className="text-orange-500 underline">
              Figma Community File: 1257790063571226666
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/1253443272911187215/apple-design-resources-visionos"
              className="text-orange-500 underline">
              Apple Design Resources for visionOS
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/1280961960315268562"
              className="text-orange-500 underline">
              Figma Community File: 1280961960315268562
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/lLdER55nkPXJLFyVYYxgpo/Introducing-Vision-Pro---Prototype-with-Figma--Community-?node-id=1-63&t=Q28QA4hk2AcDGumJ-0"
              className="text-orange-500 underline">
              Vision Pro Prototype by Figma Community
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/1250360465077706374"
              className="text-orange-500 underline">
              Figma Community File: 1250360465077706374
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/1253849216469000113"
              className="text-orange-500 underline">
              Figma Community File: 1253849216469000113
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/1247925396288435116"
              className="text-orange-500 underline">
              Figma Community File: 1247925396288435116
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/1249056124627837770"
              className="text-orange-500 underline">
              Figma Community File: 1249056124627837770
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/1247628185400180189"
              className="text-orange-500 underline">
              Figma Community File: 1247628185400180189
            </a>
          </li>
        </ul>

        <h2>3. Open Source Assets</h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Avatars / Memoji</strong> – Inspired or adapted from
            open-source resources on GitHub.{" "}
            <a
              href="https://github.com/Wimell/Tapback-Memojis"
              className="text-orange-500 underline">
              Tapback-Memojis
            </a>
          </li>
          <li>
            Icons, illustrations, and images – Courtesy of their respective
            creators and open-source licenses.
          </li>
        </ul>

        <h2>4. License Compliance</h2>
        <p>
          We respect the licenses of all open-source tools, design files, and
          assets we use. Where required, proper attribution is provided, and all
          derivative work follows the guidelines of the respective licenses
          (MIT, Apache 2.0, Figma Community Licenses, etc.).
        </p>

        <h2>5. Contribute & Get Involved</h2>
        <p>
          We love contributing back to the open-source and design community! If
          you find a bug, have an improvement, or want to add a feature, feel
          free to contribute via our{" "}
          <a
            href={siteConfig.links.github}
            className="text-orange-500 underline">
            GitHub repository
          </a>
          .
        </p>

        <h2>6. Thank You</h2>
        <p>
          To all the developers, designers, and creators whose work powers{" "}
          <strong>{siteConfig.name}</strong> — thank you! Your contributions
          make building better tools possible.
        </p>
      </ContentWrapper>
      <Divider />
    </PageView>
  )
}
