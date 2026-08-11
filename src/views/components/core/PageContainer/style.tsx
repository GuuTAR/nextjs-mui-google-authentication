import { Container, Stack, styled } from '@mui/material'

import { APP_MENU_SIZE, BOTTOM_NAVBAR_HEIGHT } from '@/data/global'

type PageContentProps = {
  isShowAppMenu: boolean
}

export const PageContent = styled(Stack, { shouldForwardProp: (prop) => prop !== 'isShowAppMenu' })<PageContentProps>(
  ({ theme, isShowAppMenu }) => ({
    minHeight: '100vh',
    marginLeft: isShowAppMenu ? APP_MENU_SIZE : 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  }),
)

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(BOTTOM_NAVBAR_HEIGHT / 8 + 6),
}))
