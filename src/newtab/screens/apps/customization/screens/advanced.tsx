// screens/AdvancedScreen.tsx
import { Button, Switch } from "@heroui/react"
import React from "react"

import { Text } from "~components/view/text"
import { Section } from "~newtab/elements/section"

export const AdvancedScreen = () => (
  <div className="flex flex-col gap-4">
    <Section.Wrapper title="Advanced">
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Developer Mode
          </Text>
        }
        endContent={<Switch size="sm" color="danger" />}
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Reset Settings
          </Text>
        }
        endContent={
          <Button size="sm" color="danger">
            Reset
          </Button>
        }
      />
    </Section.Wrapper>
  </div>
)
