import { ReactNode } from 'react'

import { TypographyVariant } from '@mui/material'

import { AppMenuType } from '@/enum/AppMenu'
import { LANGUAGE } from '@/enum/global'

export type AppMenuItemDefault = {
  icon: ReactNode
  path: string
}

export type AppMenuItemButton = {
  path: string
  variant?: 'text' | 'outlined' | 'contained'
}

export type AppMenuItemTypography = {
  typographyVariant?: TypographyVariant
}

export type AppMenu = { type: AppMenuType; name: Record<LANGUAGE, string>; paddingY?: number } & (
  | AppMenuItemDefault
  | AppMenuItemButton
  | AppMenuItemTypography
)

export type AppMenuMobile = {
  isVisibleInMore?: boolean
} & AppMenu
