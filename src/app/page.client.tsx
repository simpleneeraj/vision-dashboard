"use client"

import React from "react"

import Navigation from "~components/navigation"
import View from "~components/view"
import BlurView from "~components/view/blur-view"
import MainSection from "~newtab/main"

type HomePageProps = {
  // Define your props here
}

const HomePageClient: React.FC<HomePageProps> = ({}) => {
  return (
    <View className="flex flex-1 relative">
      <MainSection />
      <View className="fixed w-full z-50 bottom-8 flex items-center justify-center">
        <BlurView className="p-4 rounded-2xl">
          <Navigation />
        </BlurView>
      </View>
    </View>
  )
}

export default HomePageClient
