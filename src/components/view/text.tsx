import type { VariantProps } from "@heroui/react"
import React from "react"

import { textStyle } from "./style"

type TextVariants = VariantProps<typeof textStyle>

type TextProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  className?: string
} & TextVariants &
  Omit<
    React.ComponentPropsWithoutRef<T>,
    keyof TextVariants | "as" | "children"
  >

export const Text = <T extends React.ElementType = "span">({
  as,
  children,
  className,
  variant,
  size,
  tone,
  ...props
}: TextProps<T>) => {
  const Component = as || "span"
  return (
    <Component
      className={textStyle({ variant, size, tone, className })}
      {...props}>
      {children}
    </Component>
  )
}
