import { Theme, useMediaQuery, useTheme } from '@mui/material'

type UseBreakpointResult = {
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
}

export default function useBreakpoint(): UseBreakpointResult {
  const theme: Theme = useTheme()

  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('md'))
  const isTablet: boolean = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'))

  return { isDesktop, isTablet, isMobile }
}
