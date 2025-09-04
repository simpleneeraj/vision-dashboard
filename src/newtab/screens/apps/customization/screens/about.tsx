// screens/AboutScreen.tsx
import React from "react"

import { Text } from "~components/view/text"
import { Section } from "~newtab/elements/section"

export const AboutScreen = () => (
  <div className="flex flex-col gap-4">
    {/* App Info */}
    <Section.Wrapper title="Application">
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Name
          </Text>
        }
        endContent={<Text size="sm">VisionOS Dashboard</Text>}
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Version
          </Text>
        }
        endContent={<Text size="sm">1.0.0</Text>}
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Developer
          </Text>
        }
        endContent={<Text size="sm">Simple Neeraj</Text>}
      />
    </Section.Wrapper>

    {/* Links */}
    <Section.Wrapper title="Resources">
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Website
          </Text>
        }
        endContent={
          <a
            href="https://yourwebsite.com"
            target="_blank"
            className="text-primary text-sm">
            yourwebsite.com
          </a>
        }
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Privacy Policy
          </Text>
        }
        endContent={
          <a
            href="https://yourwebsite.com/privacy"
            target="_blank"
            className="text-primary text-sm">
            View
          </a>
        }
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Terms of Service
          </Text>
        }
        endContent={
          <a
            href="https://yourwebsite.com/terms"
            target="_blank"
            className="text-primary text-sm">
            View
          </a>
        }
      />
    </Section.Wrapper>
  </div>
)
