// screens/AppearanceScreen.tsx
import { Button, Switch } from "@heroui/react"
import React from "react"

import { Text } from "~components/view/text"
import { Section } from "~newtab/elements/section"

export const AppearanceScreen = () => (
  <div className="flex flex-col gap-4">
    <Section.Wrapper title="Theme">
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Dark Mode
          </Text>
        }
        endContent={<Switch size="sm" color="success" />}
      />
    </Section.Wrapper>

    <Section.Wrapper title="Accent Color">
      <div className="flex gap-2 px-4 py-3">
        {["#3b82f6", "#10b981", "#f59e0b", "#ef4444"].map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            className="w-6 h-6 rounded-full border-2 border-white/30 hover:scale-110 transition"
          />
        ))}
      </div>
    </Section.Wrapper>
  </div>
)
