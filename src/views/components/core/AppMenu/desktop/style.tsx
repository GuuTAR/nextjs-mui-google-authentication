import { AppBar, List, ListItemIcon, Stack, styled, Typography } from '@mui/material'

import { APP_MENU_SIZE, NAVBAR_HEIGHT } from '@/data/global'

import CoreButton from '@/views/components/core/CoreButton'

export const DesktopTopbar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  top: 0,
  right: 0,
  height: NAVBAR_HEIGHT,
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
}))

export const DrawerContentWrapper = styled(Stack)(() => ({
  height: '100%',
  justifyContent: 'space-between',
}))

export const MenuContainer = styled(Stack)(({ theme }) => ({
  width: APP_MENU_SIZE,
  padding: theme.spacing(3, 2, 0),
  gap: theme.spacing(2),
}))

export const AppNameContainer = styled(Stack)(({ theme }) => ({
  paddingLeft: theme.spacing(1.5),
}))

type MenuItemButtonProps = {
  isSelected: boolean
}

export const MenuItemButton = styled(CoreButton, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<MenuItemButtonProps>(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? theme.palette.background.default : 'transparent',
  borderRadius: 12,
}))

export const MenuItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<MenuItemButtonProps>(({ theme, isSelected }) => ({
  color: isSelected ? theme.palette.primary.dark : theme.palette.text.primary,
}))

export const MenuItemText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<MenuItemButtonProps>(({ theme, isSelected }) => ({
  width: '100%',
  color: isSelected ? theme.palette.primary.dark : theme.palette.text.primary,
  fontWeight: isSelected ? 'bold' : 'normal',
}))

export const MenuItemComponentWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 0),
}))

export const MenuFooterContainer = styled(List)(({ theme }) => ({
  padding: theme.spacing(1),
}))
