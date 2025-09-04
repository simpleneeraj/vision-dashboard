import { Switch } from "@heroui/react"
// screens/LayoutScreen.tsx
import React from "react"

import { Text } from "~components/view/text"
import { tabs } from "~constants/apps"
import { Section } from "~newtab/elements/section"

export const LayoutScreen = () => (
  <div className="flex flex-col gap-4 overflow-auto">
    {/* Categories Section */}
    <Section.Wrapper title="Categories">
      {tabs.map((tab, index) => (
        <Section.Item
          key={tab.key}
          showDivider={index < tabs.length - 1}
          startContent={
            <Text tone="subtle" size="sm">
              {tab.title}
            </Text>
          }
          endContent={<Switch size="sm" color="success" />}
        />
      ))}
    </Section.Wrapper>

    {/* Notifications Section */}
    <Section.Wrapper title="Notifications">
      <Section.Item
        showDivider
        className="px-4 py-3 flex items-center justify-between"
        startContent={
          <Text tone="subtle" size="sm">
            Enable push notifications
          </Text>
        }
        endContent={<Switch size="sm" color="success" />}
      />
      <Section.Item
        className="px-4 py-3 flex items-center justify-between"
        startContent={
          <Text tone="subtle" size="sm">
            Show app badges
          </Text>
        }
        endContent={<Switch size="sm" color="success" />}
      />
    </Section.Wrapper>
    <Section.Wrapper title="Layout">
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Grid Size
          </Text>
        }
        endContent={
          <select className="bg-transparent px-2 py-1 rounded-md text-sm">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        }
      />
      <Section.Item
        startContent={
          <Text tone="subtle" size="sm">
            Sidebar Position
          </Text>
        }
        endContent={
          <select className="bg-transparent px-2 py-1 rounded-md text-sm">
            <option>Left</option>
            <option>Right</option>
          </select>
        }
      />
    </Section.Wrapper>
  </div>
)
