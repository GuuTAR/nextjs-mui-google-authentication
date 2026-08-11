import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { BottomNavigation } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'

import { AppMenuItemDefault, AppMenuMobile as AppMenuMobileType } from '@/types/AppMenu'
import { LANGUAGE } from '@/enum/global'

import { APP_MENU_DATA_MOBILE } from '@/data/global'

import { useAppData } from '@/providers/AppDataProvider'

import AppName from '@/views/components/core/AppName'
import CoreButton from '@/views/components/core/CoreButton'

import * as Styles from './style'

export default function AppMenuMobile() {
  const router = useRouter()
  const pathname: string = usePathname()
  const { language } = useAppData()

  const visibleMenuItems: AppMenuMobileType[] = APP_MENU_DATA_MOBILE.filter((menu) => !menu.isVisibleInMore)
  const pageIdx: number = visibleMenuItems.findIndex((menu) => (menu as AppMenuItemDefault).path === pathname)

  const isNewNotePage: boolean = useMemo(() => {
    return pathname === '/new-note'
  }, [pathname])

  return (
    <>
      <Styles.Navbar>
        <AppName />
      </Styles.Navbar>
      <Styles.MobileMenuContainer>
        {isNewNotePage ? null : (
          <Styles.NewNoteButtonWrapper>
            <Styles.NewNoteButton>
              <CoreButton variant="contained" path="/new-note">
                <AddIcon />
              </CoreButton>
            </Styles.NewNoteButton>
          </Styles.NewNoteButtonWrapper>
        )}
        <Styles.StyledPaper elevation={1}>
          <BottomNavigation
            showLabels
            value={pageIdx}
            onChange={(_, idx) => {
              if (idx < APP_MENU_DATA_MOBILE.length) router.push((APP_MENU_DATA_MOBILE[idx] as AppMenuItemDefault).path)
            }}
          >
            {visibleMenuItems.map((menu) => (
              <Styles.MenuItems
                key={menu.name[LANGUAGE.ENGLISH]}
                label={menu.name[language]}
                icon={(menu as AppMenuItemDefault).icon}
              />
            ))}
          </BottomNavigation>
        </Styles.StyledPaper>
      </Styles.MobileMenuContainer>
    </>
  )
}
