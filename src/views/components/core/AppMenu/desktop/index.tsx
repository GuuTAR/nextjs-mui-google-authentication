import { usePathname } from 'next/navigation'

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'

import LogoutIcon from '@mui/icons-material/Logout'

import { AppMenuItemButton, AppMenuItemDefault, AppMenuItemTypography } from '@/types/AppMenu'
import { AppMenuType } from '@/enum/AppMenu'
import { LANGUAGE } from '@/enum/global'

import { APP_MENU_DATA_DESKTOP } from '@/data/global'

import { useAppData } from '@/providers/AppDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import { LOGOUT_LABEL } from '@/views/components/core/AppMenu/lang'
import AppName from '@/views/components/core/AppName'
import CoreButton from '@/views/components/core/CoreButton'
import ProfileAvatar from '@/views/components/core/ProfileAvatar'

import * as Styles from './style'

export default function AppMenuDesktop() {
  const pathname: string = usePathname()

  const { language } = useAppData()
  const { handleLogout } = useUserData()

  return (
    <>
      <Styles.DesktopTopbar elevation={0}>
        <Tooltip title="Profile" placement="left">
          <Stack>
            <CoreButton path="/profile">
              <ProfileAvatar width={40} height={40} />
            </CoreButton>
          </Stack>
        </Tooltip>
      </Styles.DesktopTopbar>
      <Drawer variant="permanent" anchor="left">
        <Styles.DrawerContentWrapper>
          <Styles.MenuContainer>
            <Styles.AppNameContainer>
              <AppName />
            </Styles.AppNameContainer>
            <List>
              {APP_MENU_DATA_DESKTOP.map((menu) => {
                if (menu.type === AppMenuType.DEFAULT) {
                  const menuItemDefault = menu as AppMenuItemDefault
                  return (
                    <ListItem key={menu.name[LANGUAGE.ENGLISH]} disablePadding>
                      <Styles.MenuItemButton
                        path={menuItemDefault.path}
                        fullWidth
                        size="large"
                        isSelected={pathname === menuItemDefault.path}
                      >
                        <Styles.MenuItemIcon isSelected={pathname === menuItemDefault.path}>
                          {menuItemDefault.icon}
                        </Styles.MenuItemIcon>
                        <Stack></Stack>
                        <Styles.MenuItemText
                          variant="body2"
                          align="left"
                          isSelected={pathname === menuItemDefault.path}
                        >
                          {menu.name[language]}
                        </Styles.MenuItemText>
                      </Styles.MenuItemButton>
                    </ListItem>
                  )
                } else if (menu.type === AppMenuType.BUTTON) {
                  const menuItemButton = menu as AppMenuItemButton
                  return (
                    <ListItem key={menu.name[LANGUAGE.ENGLISH]} disablePadding>
                      <Styles.MenuItemComponentWrapper sx={{ py: menu.paddingY || 0 }}>
                        <CoreButton variant={menuItemButton.variant} path={menuItemButton.path} fullWidth>
                          {menu.name[language]}
                        </CoreButton>
                      </Styles.MenuItemComponentWrapper>
                    </ListItem>
                  )
                } else if (menu.type === AppMenuType.TYPOGRAPHY) {
                  const menuItemTypography = menu as AppMenuItemTypography
                  return (
                    <ListItem key={menu.name[LANGUAGE.ENGLISH]} disablePadding>
                      <Styles.MenuItemComponentWrapper>
                        <Typography variant={menuItemTypography.typographyVariant}>{menu.name[language]}</Typography>
                      </Styles.MenuItemComponentWrapper>
                    </ListItem>
                  )
                }
              })}
            </List>
          </Styles.MenuContainer>
          <Stack>
            <Divider />
            <Styles.MenuFooterContainer>
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={LOGOUT_LABEL[language]} />
                </ListItemButton>
              </ListItem>
            </Styles.MenuFooterContainer>
          </Stack>
        </Styles.DrawerContentWrapper>
      </Drawer>
    </>
  )
}
