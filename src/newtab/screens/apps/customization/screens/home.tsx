import React from "react"

import { Text } from "~components/view/text"
import { Section } from "~newtab/elements/section"

export const HomeScreen = () => (
  <div className="flex flex-col gap-4">
    <Section.Wrapper title="General">
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            App Name
          </Text>
        }
        endContent={
          <input
            className="bg-transparent border-b border-white/20 px-2 py-1 text-sm outline-none"
            defaultValue="My Vision App"
          />
        }
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Language
          </Text>
        }
        endContent={
          <select className="bg-transparent px-2 py-1 rounded-md text-sm">
            <option>English</option>
            <option>हिंदी</option>
            <option>日本語</option>
          </select>
        }
      />
    </Section.Wrapper>
  </div>
)
