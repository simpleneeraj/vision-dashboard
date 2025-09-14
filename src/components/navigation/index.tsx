import Link from "next/link"

import { siteConfig } from "~config/site"

export default function Navigation() {
  return (
    <nav className="flex items-center gap-6 z-50">
      {siteConfig.navigations.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium hover:text-app-regal-gold hover:underline transition-colors">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
