import { CardHeader, Slider, Switch } from "@heroui/react"
import React from "react"

import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { BLUR_PRESETS, OPACITY_PRESETS } from "~constants/presets"
import { Section } from "~newtab/elements/section"
import { slider, switchStyle } from "~newtab/style/layout"
import useAppStore from "~store/slice/app"

const { track } = slider()
const { wrapper } = switchStyle()

const BackgroundsEffects: React.FC = () => {
  const { state, updateState } = useAppStore()
  const effects = state?.display?.wallpaper?.effects

  /** Handlers for blur */
  const handleBlurToggle = (enabled: boolean) => {
    updateState("display.wallpaper.effects.blur.enabled", enabled)
  }

  const handleBlurIntensity = (value: number) => {
    updateState("display.wallpaper.effects.blur.intensity", value)
  }

  /** Handlers for transparency */
  const handleTransparencyToggle = (enabled: boolean) => {
    updateState("display.wallpaper.effects.transparency.enabled", enabled)
  }

  const handleTransparencyValue = (value: number) => {
    updateState("display.wallpaper.effects.transparency.value", value)
  }

  return (
    <BlurView className="flex min-w-128 h-144 rounded-3xl">
      {/* Header */}
      <CardHeader className="text-base font-medium flex items-center justify-center border-b border-white/10 p-4">
        <Text tone="subtle">Effects</Text>
      </CardHeader>

      {/* Content */}
      <View className="flex-1 flex flex-col gap-2 p-2">
        <View className="flex flex-col px-2 gap-4">
          {/* Blur Section */}
          <Section.Wrapper title="Background Blur">
            <Section.Item
              showDivider
              className="px-4 py-3 flex items-center justify-between"
              startContent={
                <Text tone="subtle" size="sm">
                  Turn On Blur
                </Text>
              }
              endContent={
                <Switch
                  size="sm"
                  color="success"
                  isSelected={effects.blur.enabled}
                  onValueChange={handleBlurToggle}
                  classNames={{
                    wrapper: wrapper()
                  }}
                />
              }
            />

            <Section.Item
              className="px-4 py-3 gap-2"
              startContent={
                <Text tone="subtle" size="sm" className="w-full">
                  Blur Strength
                </Text>
              }
              endContent={
                <Slider
                  size="sm"
                  step={1}
                  showTooltip
                  color="foreground"
                  minValue={BLUR_PRESETS.none}
                  maxValue={BLUR_PRESETS.intense}
                  value={effects.blur.intensity}
                  onChange={handleBlurIntensity}
                  classNames={{ track: track() }}
                  isDisabled={!effects.blur.enabled}
                />
              }
            />
          </Section.Wrapper>

          {/* Transparency Section */}
          <Section.Wrapper title="Background Transparency">
            <Section.Item
              showDivider
              className="px-4 py-3 flex items-center justify-between"
              startContent={
                <Text tone="subtle" size="sm">
                  Make Background Transparent
                </Text>
              }
              endContent={
                <Switch
                  size="sm"
                  color="success"
                  isSelected={effects.transparency.enabled}
                  onValueChange={handleTransparencyToggle}
                  classNames={{
                    wrapper: wrapper()
                  }}
                />
              }
            />

            <Section.Item
              className="px-4 py-3 gap-2"
              startContent={
                <Text tone="subtle" size="sm" className="w-full">
                  Transparency Level
                </Text>
              }
              endContent={
                <Slider
                  size="sm"
                  showTooltip
                  step={0.05}
                  color="foreground"
                  minValue={OPACITY_PRESETS.transparent}
                  maxValue={OPACITY_PRESETS.opaque}
                  value={effects.transparency.value}
                  onChange={handleTransparencyValue}
                  classNames={{ track: track() }}
                  isDisabled={!effects.transparency.enabled}
                />
              }
            />
          </Section.Wrapper>
        </View>
      </View>
    </BlurView>
  )
}

export default BackgroundsEffects
