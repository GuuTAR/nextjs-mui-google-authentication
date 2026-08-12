'use client'

import Image from 'next/image'

import { Divider, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import { useAppData } from '@/providers/AppDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import AppName from '@/views/components/core/AppName'
import BoldText from '@/views/components/core/BoldText'

import * as Languages from './lang'
import * as Styles from './style'

export default function LoginPage() {
  const { language } = useAppData()
  const { handleLogin, handleDemoLogin } = useUserData()

  return (
    <Styles.LoginPageStyle>
      <Styles.DescriptionSection>
        <Styles.ShortSummary variant="body1">{Languages.SHORT_SUMMARY[language]}</Styles.ShortSummary>
        <Styles.ContrastText variant="h1">{Languages.WELCOME_MESSAGE[language]}</Styles.ContrastText>
        <Styles.ContrastText variant="body1">{Languages.DESCRIPTION[language]}</Styles.ContrastText>
      </Styles.DescriptionSection>
      <Styles.LoginSection>
        <Styles.LoginContainer>
          <AppName />
          <BoldText variant="h4" color="textPrimary">
            {Languages.SIGN_IN[language]}
          </BoldText>
          <Styles.LoginButton variant="outlined" onClick={handleLogin}>
            <Image src="/icons/google.svg" alt="Google Icon" width={24} height={24} />
            <Typography variant="body2" color="textPrimary">
              {Languages.CONTINUE_WITH_GOOGLE[language]}
            </Typography>
          </Styles.LoginButton>
          <Divider>
            <Typography variant="body2" color="textDisabled">
              {Languages.OR[language]}
            </Typography>
          </Divider>
          <Styles.LoginButton variant="contained" onClick={handleDemoLogin}>
            <PlayArrowIcon />
            <Typography variant="body2">{Languages.PLAY_AS_DEMO_USER[language]}</Typography>
          </Styles.LoginButton>
        </Styles.LoginContainer>
      </Styles.LoginSection>
    </Styles.LoginPageStyle>
  )
}
