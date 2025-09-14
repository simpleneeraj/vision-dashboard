"use client"

import { useInView } from "motion/react"
import { useEffect, useRef } from "react"
import { annotate } from "rough-notation"

import type { HighlighterProps } from "./types"

export function Highlighter({
  children,
  action = "bracket",
  color = "#ffd1dc",
  strokeWidth = 1,
  animationDuration = 600,
  iterations = 2,
  padding = 1,
  multiline = true,
  isView = true
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%"
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  useEffect(() => {
    if (!shouldShow) return

    const element = elementRef.current
    if (!element) return

    const annotation = annotate(element, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline
    })

    annotation.show()

    return () => {
      if (element) {
        annotate(element, { type: action }).remove()
      }
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}
