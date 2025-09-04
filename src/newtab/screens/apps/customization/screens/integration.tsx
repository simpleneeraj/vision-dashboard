// screens/IntegrationsScreen.tsx
import { Button } from "@heroui/react"
import React from "react"

import { Text } from "~components/view/text"
import { Section } from "~newtab/elements/section"

export const IntegrationsScreen = () => (
  <div className="flex flex-col gap-4">
    <Section.Wrapper title="Connected Services">
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Google
          </Text>
        }
        endContent={
          <Button size="sm" variant="light">
            Connect
          </Button>
        }
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Notion
          </Text>
        }
        endContent={
          <Button size="sm" variant="light">
            Connect
          </Button>
        }
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            GitHub
          </Text>
        }
        endContent={
          <Button size="sm" variant="light">
            Connect
          </Button>
        }
      />
    </Section.Wrapper>
  </div>
)
