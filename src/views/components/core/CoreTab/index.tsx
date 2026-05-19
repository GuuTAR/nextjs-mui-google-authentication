import { ReactNode, SyntheticEvent, useCallback, useState } from 'react'
import { Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

import { StyledTabPanel, TabDivider, TapContainer } from './style'

type Props = {
  tabTitles: string[]
  tabContents: ReactNode[]
}

export default function CoreTab({ tabTitles, tabContents }: Props) {
  const [tabIdx, setTabIdx] = useState<number>(0)

  const handleChange = useCallback((_: SyntheticEvent, newValue: number) => {
    setTabIdx(newValue)
  }, [])

  return (
    <TapContainer>
      <TabContext value={tabIdx}>
        <TabDivider>
          <TabList onChange={handleChange}>
            {tabTitles.map((title, idx) => (
              <Tab key={title} label={title} value={idx} />
            ))}
          </TabList>
        </TabDivider>
        {tabContents.map((tabContent, idx) => (
          <StyledTabPanel key={idx} value={idx}>
            {tabContent}
          </StyledTabPanel>
        ))}
      </TabContext>
    </TapContainer>
  )
}
