import { useAppData } from '@/providers/AppDataProvider'

import useBreakpoint from '@/hooks/useBreakpoint'

import AppMenuDesktop from './desktop'
import AppMenuMobile from './mobile'

export default function AppMenu() {
  const { isDataLoaded } = useAppData()

  const { isDesktop } = useBreakpoint()

  if (!isDataLoaded) return null
  return isDesktop ? <AppMenuDesktop /> : <AppMenuMobile />
}
