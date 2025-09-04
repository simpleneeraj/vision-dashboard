import { SolarHome2Bold } from "~components/icons/SolarHome2Bold"
import { SolarInfoCircleBold } from "~components/icons/SolarInfoCircleBold"
import { SolarLayersMinimalisticBold } from "~components/icons/SolarLayersMinimalisticBold"
import { SolarPaletteRoundBold } from "~components/icons/SolarPaletteRoundBold"
import { SolarSettingsBold } from "~components/icons/SolarSettingsBold"
import { SolarWidgetAddBold } from "~components/icons/SolarWidgetAddBold"
import { AppTab } from "~typings/enums"

export const items = [
  { key: AppTab.HOME, icon: SolarHome2Bold },
  { key: AppTab.APPEARANCE, icon: SolarPaletteRoundBold },
  { key: AppTab.LAYOUT, icon: SolarLayersMinimalisticBold },
  { key: AppTab.INTEGRATIONS, icon: SolarWidgetAddBold },
  { key: AppTab.ADVANCED, icon: SolarSettingsBold },
  { key: AppTab.ABOUT, icon: SolarInfoCircleBold }
]
