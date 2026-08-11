import { ReactNode } from 'react'

import AppMenu from '@/views/components/core/AppMenu'

import * as Styles from './style'

type Props = {
  isShowAppMenu?: boolean
  children: ReactNode
}

export default function PageContainer({ isShowAppMenu = false, children }: Props) {
  return (
    <Styles.PageContent isShowAppMenu={isShowAppMenu}>
      {isShowAppMenu ? <AppMenu /> : null}
      <Styles.StyledContainer>{children}</Styles.StyledContainer>
    </Styles.PageContent>
  )
}
