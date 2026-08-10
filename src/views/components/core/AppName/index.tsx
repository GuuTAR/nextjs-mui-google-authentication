import { Stack, Typography } from '@mui/material'

import { useAppData } from '@/providers/AppDataProvider'

import BoldText from '@/views/components/core/BoldText'

import * as Languages from './lang'
import * as Styles from './style'

type Props = {
  isDescriptionVisible?: boolean
}

export default function AppName({ isDescriptionVisible }: Props) {
  const { language } = useAppData()

  return (
    <Styles.AppNameContainer>
      {/* <Image src="/icons/app-icon.png" alt="App Icon" width={40} height={40} /> */}
      <Stack>
        <BoldText variant="h6" color="textPrimary">
          {Languages.APP_NAME[language]}
        </BoldText>
        {isDescriptionVisible ? (
          <Typography variant="body2" color="textSecondary">
            {Languages.APP_DESCRIPTION[language]}
          </Typography>
        ) : null}
      </Stack>
    </Styles.AppNameContainer>
  )
}
